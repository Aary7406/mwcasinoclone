/**
 * Player API configuration. Every user-facing call goes through `${API_ORIGIN}/api/...` —
 * never `/v1` (that's the admin/B2B surface and must not be called from the player app).
 */
export const API_ORIGIN = (process.env.NEXT_PUBLIC_API_ORIGIN || 'https://backend.igmpgosynex.live').replace(/\/+$/, '');

/** Overrides the `X-Site-Host` header (partner/tenant scoping). Defaults to the browser hostname;
 * set this in dev when `localhost` wouldn't resolve to the partner you're testing. */
export const SITE_HOST_OVERRIDE = process.env.NEXT_PUBLIC_SITE_HOST || '';

/** Language sent with game launches. */
export const GAME_LANGUAGE = 'en';

/** Where launched games / payment gateways send the player back to. */
export const HOME_PATH = '/bd/en';
