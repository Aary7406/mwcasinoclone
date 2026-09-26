import { todo, type Paged } from './client';
import type { BetHistoryQuery, LaunchInput, LaunchResult, LedgerRow } from './types';

// TODO: implement each call. All AUTH.
// Launch returns a short-lived URL (data.launch_url || data.game_url) — never build provider URLs client-side.

export type LaunchKind = 'game' | 'sportsbook' | 'sports' | 'exchange';
// game → POST /api/9w/launch, sportsbook → /api/9w/launch-sportsbook,
// sports → /api/sports/launch, exchange → /api/sports/exchange
export const requestLaunch = (input: LaunchInput, kind: LaunchKind = 'game') => todo<LaunchResult>(`launch (${kind})`, input);

/** Returns transferred game balance to the main wallet. */
export const collect = (transfer_id?: string) => todo<void>('POST /api/sports/collect', transfer_id);
/** Leave/collect alias; safe for a keepalive call on unload. */
export const leave = (transfer_id?: string) => todo<void>('POST /api/sports/leave', transfer_id);

export const currentSportsBets = (query: BetHistoryQuery = {}) => todo<Paged<LedgerRow>>('GET /api/sports/current-bets', query);
export const betHistory = (query: BetHistoryQuery = {}) => todo<Paged<LedgerRow>>('GET /api/betting/history', query);
