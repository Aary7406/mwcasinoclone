import { todo, type Paged } from './client';
import type { Game, GamesQuery, HomeSections, Promotion, SiteSettings, WinnerBoard } from './types';

// TODO: implement each call. All PUBLIC.
// Note: backend category slugs match the site's lobby routes (casino, slot, crash, table,
// fishing, arcade, lottery, sports). `provider` takes a single provider_code.

export const games = (query: GamesQuery = {}) => todo<Paged<Game>>('GET /api/catalog/games', query);
/** Banners, catalogue (categories/providers/hot games), notices, social links, footer — one request. */
export const homeSections = () => todo<HomeSections>('GET /api/home-sections');
export const siteSettings = () => todo<SiteSettings>('GET /api/settings/site');
export const promotions = () => todo<Promotion[]>('GET /api/promotions');
export const winnerBoard = () => todo<WinnerBoard>('GET /api/winner-board');
/** No-content tracking endpoint. */
export const trackAffiliateLink = (code: string) => todo<void>('POST /api/affiliate/material-links/track/:code', code);
