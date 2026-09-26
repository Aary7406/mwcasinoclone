/**
 * Player session token storage — TO BE IMPLEMENTED.
 * Store `data.access_token` + `data.refresh_token` from login/register/refresh.
 * Never log tokens.
 */
export type Tokens = { access_token: string; refresh_token: string };

// TODO: read stored tokens (browser only).
export function getTokens(): Tokens | null {
  return null;
}

// TODO: persist tokens (or clear them when null) and notify listeners.
export function setTokens(tokens: Tokens | null): void {
  void tokens;
}

export const clearTokens = () => setTokens(null);

// TODO: subscribe to token changes (e.g. so the session context can react to logout / refresh failure).
export function onTokensChange(listener: (tokens: Tokens | null) => void): () => void {
  void listener;
  return () => {};
}

// TODO: stable random guest token for `X-Support-Guest`, persisted per browser.
export function getSupportGuestToken(): string {
  return '';
}
