## FRONTEND DEVELOPER HANDOFF

## GameX24 User Frontend API Integration Guide

A code-derived handoff containing only the backend contracts required by the current user-facing frontend. Admin-only APIs, provider webhooks and unrelated B2B routes are intentionally excluded.


## Contents

## [4. Handoff checklist](#page-0)

[13](#page-0)


## 1. Integration contract

Use the /api surface for every user-facing feature in this handoff. The canonical /v1 admin/B2B surface is outside this document and must not be called by the player application.

| Setting | Value | Frontend rule | Response convention |
| --- | --- | --- | --- |
| API origin | https://backend.igmpgosynex.live | Append the exact /api path from this guide | JSON unless redirect or multipart upload is stated |
| Player base | https://backend.igmpgosynex.live/api | Never append /v1 in the user app | Usually { data, meta?, message? } |

## Player API only

The user frontend consumes normalized snake_case token and wallet fields. Do not reuse an admin/B2B response parser or expose an admin token in the browser.

## Headers

| Header | When to send | Value |
| --- | --- | --- |
| Content-Type | JSON requests | application/json |
| Authorization | Every protected endpoint | Bearer <access-token> |
| X-Site-Host | Player-site requests | Current browser hostname; supports partner/tenant-scoped content |
| X-Support-Guest | Guest support conversation calls | Stable random guest token stored by the frontend |

## Authentication and token refresh

Log in at POST /api/auth/login and store data.access_token plus data.refresh_token. On a 401, perform one refresh through POST /api/auth/refresh, queue concurrent failed requests, replace both tokens, and retry the original request once.

## Security boundary

Never place an admin JWT, wallet-integration key, provider secret, or webhook secret in the user frontend bundle. This guide contains no webhook or provider callback endpoints.


## Response and error shapes

```
// Player success (typical)
{ "data": { ... }, "meta": { ... }, "message": "..." }
// Error
{ "code": 400, "message": "Validation or operational error" }
```

Treat 400 as validation/input failure, 401 as expired or missing authentication, 403 as insufficient role rights, 404 as missing resource, 409 as a state conflict, 410 as an expired checkout, 429 as rate limiting, and 5xx as a server or upstream failure.


## 2. Frontend quick start

## Recommended player-app startup order

| Step | Call | Purpose |
| --- | --- | --- |
| 1 | GET /api/settings/site | Load public support links and app URL. |
| 2 | GET /api/home-sections | Load home content, categories, providers, banners and notices in one request. |
| 3 | GET /api/catalog/games?page=1&limit=120 | Load the first game page; add category/provider/search filters as needed. |
| 4 | POST /api/auth/login | Create a player session when the user signs in. |
| 5 | GET /api/auth/me + GET /api/wallet/balance | Hydrate profile and wallet after login/refresh. |
| 6 | GET /api/wallet/funds-config | Build deposit and withdrawal forms from backend-controlled methods/limits. |
| 7 | POST /api/9w/launch or /api/sports/launch | Request a short-lived launch URL; never construct provider URLs client-side. |

## Reusable fetch wrapper

```
const API_ORIGIN = "https://backend.igmpgosynex.live";
export async function playerApi(path, { method = "GET", token, body, headers } = {}) {
const response = await fetch(`${API_ORIGIN}${path}`, {
method,
headers: {
...(body ? { "Content-Type": "application/json" } : {}),
"X-Site-Host": window.location.hostname,
...(token ? { Authorization: `Bearer ${token}` } : {}),
...headers,
},
body: body ? JSON.stringify(body) : undefined,
});
const payload = await response.json().catch(() => ({}));
if (!response.ok || payload.success === false) {
const error = new Error(payload.message || `Request failed (${response.status})`);
error.status = response.status;
error.payload = payload;
throw error;
}
return payload;
}
```


## Login, refresh and profile hydration

```
const login = await playerApi("/api/auth/login", {
method: "POST",
body: { username, password },
});
const session = login.data; // access_token, refresh_token, user
const refreshed = await playerApi("/api/auth/refresh", {
method: "POST",
body: { refresh_token: session.refresh_token },
});
const profile = await playerApi("/api/auth/me", {
token: refreshed.data.access_token,
});
```

## Game catalogue and launch

```
const query = new URLSearchParams({ category: "SLOTS", limit: "120", page: "1" });
const catalogue = await playerApi(`/api/catalog/games?${query}`);
const launch = await playerApi("/api/9w/launch", {
method: "POST",
token: accessToken,
body: {
game_uid: selectedGame.game_uid,
provider_code: selectedGame.provider_code,
language: "en",
platform: window.innerWidth < 768 ? 2 : 1,
home_url: window.location.origin,
},
});
window.location.assign(launch.data.launch_url || launch.data.game_url);
```

## Manual deposit flow

Call GET /api/wallet/funds-config, validate limits against the returned payment method, then create a checkout. Redirect to data.redirect_url; submit the player's transfer reference to the token-scoped submit endpoint and poll the token status until approved/rejected. The checkout expires after 15 minutes.

```
const checkout = await playerApi("/api/payment/manual/checkout", {
method: "POST",
token: accessToken,
body: {
amount: 1000,
```


```
payment_method_code: "bkash",
channel_code: "cash_out",
return_url: `${window.location.origin}/bd/en`,
},
});
await playerApi(`/api/payment/manual/checkout/${checkout.data.token}/submit`, {
method: "POST",
body: { transaction_id: playerTransactionId },
});
```

## Support attachments

Use multipart/form-data and let the browser set the boundary. POST /api/support/conversations/:conversationId/attachments expects up to eight files in repeated field files, each up to 20 MB. Send the same X-Support-Guest token used to open the conversation.


## 3. Player API reference

All paths in this section are relative to the API origin. An asterisk marks a required input. AUTH means a Bearer access token is required. GUEST TOKEN means the support guest header must be preserved across calls.

## Discovery & content (5)

| Method | Endpoint | Access | Inputs | Purpose / state |
| --- | --- | --- | --- | --- |
| GET | /api/catalog/games | PUBLIC | query: category, provider, search, page, limit (1-1000) | Public, paginated game catalogue. |
| GET | /api/home-sections | PUBLIC | - | Home bootstrap: banners, catalogue, notices, social links |
|   |   |   |   | and footer. |
| GET | /api/promotions | PUBLIC | - | Active promotions. |
| GET | /api/settings/site | PUBLIC | - | Public support links and app URL. |
| GET | /api/winner-board | PUBLIC | - | Top payout rows for daily/weekly UI. |


## Authentication & profile (17)

| Method | Endpoint | Access | Inputs | Purpose / state |
| --- | --- | --- | --- | --- |
| GET | /api/auth/activity-logs | AUTH | query: limit (max 50) | Recent login/activity history. |
| POST | /api/auth/change-password | AUTH | body: old_password/current_password*, new_password* | Changes password. |
| GET | /api/auth/check-username | PUBLIC | query: username* (4-16 lowercase letters/numbers) | Availability check. |
| POST | /api/auth/email/send-otp | AUTH | body: email* | Updates email when changed, then sends OTP. |
| POST | /api/auth/email/verify-otp | AUTH | body: otp/code/verification_code* | Verifies email OTP. |
| POST | /api/auth/login | PUBLIC | body: username/emailOrUsername*, password* | Returns normalized access_token, refresh_token and |
|   |   |   |   | user. |
| POST | /api/auth/logout | AUTH | body: refresh_token or refreshToken (optional) | Revokes refresh token(s). |
| GET | /api/auth/me | AUTH | - | Normalized current player profile. |
| POST | /api/auth/phone/send-otp | AUTH | body: phoneNumber/phone/request_id* | Alias for phone verification start. |
| POST | /api/auth/phone/verify-otp | AUTH | body: otp/code/verificationCode* | Alias for phone verification. |
| POST | /api/auth/phones/add/resend | AUTH | body: phoneNumber/phone/request_id* | Resends phone OTP. |
| POST | /api/auth/phones/add/start | AUTH | body: phoneNumber/phone/request_id* | Starts phone verification. |
| POST | /api/auth/phones/add/verify-new | AUTH | body: otp/code/verificationCode* | Verifies added phone. |
| POST | /api/auth/phones/add/verify-primary | AUTH | body: otp/code/verificationCode* | Verifies phone. |
| PATCH | /api/auth/profile | AUTH | body: full_name/name, date_of_birth/dob, email | Partial profile update. |
| POST | /api/auth/refresh | PUBLIC | body: refresh_token* | Rotates access and refresh tokens. |
| POST | /api/auth/register | PUBLIC | body: username*, password*, phone, full_name, referral_code, | Registers player and returns normalized tokens/user. |
|   |   |   | partner_code, device_fingerprint |   |


## Wallet & transaction history (9)

| Method | Endpoint | Access | Inputs | Purpose / state |
| --- | --- | --- | --- | --- |
| GET | /api/wallet/balance | AUTH | - | Normalized wallet balances. |
| POST | /api/wallet/deposit/request | AUTH | body: amount*, payment_method_code, wallet_number, channel_code, | Manual deposit request. |
|   |   |   | notes, promotion_id, transaction_id |   |
| GET | /api/wallet/deposits | AUTH | query: status, payment_method_code/paymentMethod, from, to, sortBy, | Player deposit history. |
|   |   |   | page, limit |   |
| GET | /api/wallet/funds-config | AUTH | - | Currency, payment methods, verified phones and routing |
|   |   |   |   | flags. |
| GET | /api/wallet/master-deposits | AUTH | query: page, limit | Referral bonus history compatibility list. |
| GET | /api/wallet/my-master | AUTH | - | Referral network statistics. |
| GET | /api/wallet/transactions | AUTH | query: type, balanceType, status, from/startDate, to/endDate, sortBy, | Normalized ledger list. |
|   |   |   | page, limit |   |
| POST | /api/wallet/withdraw/request | AUTH | body: amount*, payment_method_code, recipient_number/name, | Withdrawal request. |
|   |   |   | bank_name/account, notes |   |
| GET | /api/wallet/withdrawals | AUTH | query: status, payment_method_code/withdrawalMethod, from, to, | Player withdrawal history. |
|   |   |   | sortBy, page, limit |   |

## Payments (10)

| Method | Endpoint | Access | Inputs | Purpose / state |
| --- | --- | --- | --- | --- |
| POST | /api/payment/manual/checkout | AUTH | body: amount*, payment_method_code*, channel_code*, return_url*, | Creates a 15-minute manual checkout token. |
|   |   |   | promotion_id |   |
| GET | /api/payment/manual/checkout/:token | PUBLIC | path: token* | Reads checkout details. |
| GET | /api/payment/manual/checkout/:token/status | PUBLIC | path: token* | Polls checkout/deposit state. |
| POST | /api/payment/manual/checkout/:token/submit | PUBLIC | path: token*; body: transaction_id* | Submits transfer reference for approval. |
| GET | /api/payment/methods | AUTH | - | Available deposit/withdraw methods for current player. |
| POST | /api/payment/wpay/payin | AUTH | body: amount*, method/payment_method_code*, mobile/phone, | Creates hosted pay-in. |
|   |   |   | return_url, promotion_id |   |
| GET | /api/payment/wpay/payin/:depositId | AUTH | path: depositId* | Tracks pay-in by deposit ID. |
| GET | /api/payment/wpay/payin/reference/:reference | AUTH | path: reference* | Tracks pay-in by reference. |
| POST | /api/payment/wpay/payout | AUTH | body: amount*, method/payment_method_code*, | Creates WPay payout. |
|   |   |   | recipient_number/payout_msisdn*, recipient_name |   |
| GET | /api/payment/wpay/return | PUBLIC | query: reference, request_id, payment | Gateway return URL; redirects to merchant return URL. |


## Games & launch (7)

| Method | Endpoint | Access | Inputs | Purpose / state |
| --- | --- | --- | --- | --- |
| POST | /api/9w/launch | AUTH | body: game_uid/gameId, provider_code/provider, language, platform | Launches a game. |
|   |   |   | (1|2), home_url |   |
| POST | /api/9w/launch-sportsbook | AUTH | body: game_uid/gameId, provider_code/provider, language, platform | Launches sportsbook. |
| POST | /api/sports/collect | AUTH | body: transfer_id (optional) | Returns transferred game balance to main wallet. |
| GET | /api/sports/current-bets | AUTH | query: site, product, game_id, period, from, to, sortBy, page, limit | Current sports bets compatibility view. |
| POST | /api/sports/exchange | AUTH | body: game_uid/gameId, provider_code/provider, language, platform | Launches exchange product. |
| POST | /api/sports/launch | AUTH | body: game_uid/gameId, provider_code/provider, language, platform | Launches sportsbook/game. |
| POST | /api/sports/leave | AUTH | body: transfer_id (optional) | Leave/collect alias; safe for keepalive call. |

## Bet history (1)

| Method | Endpoint | Access | Inputs | Purpose / state |
| --- | --- | --- | --- | --- |
| GET | /api/betting/history | AUTH | query: site, product, game_id, period, from, to, sortBy, page, limit | Settled/player bet history. |

## Player inbox (2)

| Method | Endpoint | Access | Inputs | Purpose / state |
| --- | --- | --- | --- | --- |
| GET | /api/player/inbox | AUTH | - | Up to 100 active player notifications. |
| GET | /api/player/inbox/count | AUTH | - | Returns data.unread_count. |

## VIP & rewards (6)

| Method | Endpoint | Access | Inputs | Purpose / state |
| --- | --- | --- | --- | --- |
| POST | /api/referral/claim | AUTH | - | Claims all available referral bonuses. |
| GET | /api/referral/summary | AUTH | - | Referral totals, invitees and ledger. |
| POST | /api/vip/convert | AUTH | body: points* | Converts VIP points to cash using current level rule. |
| GET | /api/vip/history | AUTH | query: sortBy, page, limit | VIP point history. |
| GET | /api/vip/program | PUBLIC | - | Public active VIP levels. |
| GET | /api/vip/status | AUTH | - | Current VIP level, points and next-level progress. |


## Bonuses & rewards (4)

| Method | Endpoint | Access | Inputs | Purpose / state |
| --- | --- | --- | --- | --- |
| GET | /api/bonus/available | PUBLIC | - | Active bonus catalogue. |
| GET | /api/bonus/my-bonuses | AUTH | query: status | Player bonus queue/history. |
| POST | /api/bonus/real-time/claim | AUTH | - | Claims unclaimed real-time bonuses. |
| GET | /api/bonus/turnover | AUTH | query: sortBy, page, limit | Player turnover items. |

## Support (5)

| Method | Endpoint | Access | Inputs | Purpose / state |
| --- | --- | --- | --- | --- |
| POST | /api/support/conversations | GUEST TOKEN | body: guest_token, force_new | Creates/reuses guest support conversation. |
| POST | /api/support/conversations/:conversationId/attac | GUEST TOKEN | multipart: files[] (max 8, 20 MB each); guest header | Uploads support attachments. |
|   | hments |   |   |   |
| GET | /api/support/conversations/:conversationId/messa | GUEST TOKEN | path: conversationId*; body on POST: body*, topic; guest header | GET history or POST a message. |
|   | ges |   |   |   |
| POST | /api/support/conversations/:conversationId/messa | GUEST TOKEN | path: conversationId*; body on POST: body*, topic; guest header | GET history or POST a message. |
|   | ges |   |   |   |
| GET | /api/support/conversations/current | GUEST TOKEN | header: X-Support-Guest (or body guest_token) | Reads current guest-scoped conversation. |

## Affiliate tracking (1)

| Method | Endpoint | Access | Inputs | Purpose / state |
| --- | --- | --- | --- | --- |
| POST | /api/affiliate/material-links/track/:code | PUBLIC | path: code* | No-content tracking endpoint. |


## 4. Handoff checklist

| Done | Frontend integration check |
| --- | --- |
| [ ] | Configure the API origin once and use only the /api paths documented here. |
| [ ] | Implement a single-flight refresh flow; retry a 401 only once. |
| [ ] | Send Bearer token only to protected routes and never log tokens or password/OTP payloads. |
| [ ] | Send X-Site-Host on player requests when partner-scoped content is expected. |
| [ ] | Use backend payment methods, limits, channels and routing flags; do not hard-code them. |
| [ ] | Validate form payloads against the exact field names in this guide. |
| [ ] | Use multipart/form-data for support attachments and do not manually set the multipart boundary. |
| [ ] | Handle 400, 401, 403, 404, 409, 410, 429 and 5xx distinctly in the UI. |
| [ ] | After writes, invalidate/refetch the relevant wallet, bonus, catalogue or profile query. |
| [ ] | Test login, refresh, profile, wallet, deposit, withdrawal, launch and logout against a non-production user. |

## Source of truth

When code and this snapshot differ, the mounted Express routes, Joi validation files, and the consuming frontend call site are authoritative. Regenerate this handoff after route, validation or response-adapter changes.
