/**
 * Player API scaffolding. Every function is a typed stub (`todo(...)`) naming its endpoint —
 * implement `client.ts` + `tokens.ts` first, then fill in the stubs.
 * Reference: public/gamex24-user-frontend-api-handoff.md
 *
 *   import { auth, wallet, catalog } from '@/lib/api';
 */
export * as auth from './auth';
export * as wallet from './wallet';
export * as payment from './payment';
export * as catalog from './catalog';
export * as games from './games';
export * as rewards from './rewards';
export * as support from './support';

export { request, refreshSession, type Envelope, type Paged, type PageMeta, type RequestOptions } from './client';
export { ApiError, isApiError } from './errors';
export { getTokens, setTokens, clearTokens, onTokensChange } from './tokens';
export { API_ORIGIN } from './config';
export type * from './types';
