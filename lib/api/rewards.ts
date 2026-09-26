import { todo, type Paged } from './client';
import type { Bonus, InboxMessage, LedgerRow, VipLevel, VipStatus } from './types';

// TODO: implement each call. AUTH unless marked PUBLIC.

type PageQuery = { sortBy?: string; page?: number; limit?: number };

// inbox
export const inbox = () => todo<InboxMessage[]>('GET /api/player/inbox');
export const inboxCount = () => todo<{ unread_count: number }>('GET /api/player/inbox/count');

// VIP
/** PUBLIC */
export const vipProgram = () => todo<{ levels: VipLevel[] }>('GET /api/vip/program');
export const vipStatus = () => todo<VipStatus>('GET /api/vip/status');
export const vipHistory = (query: PageQuery = {}) => todo<Paged<LedgerRow>>('GET /api/vip/history', query);
export const convertVipPoints = (points: number) => todo<void>('POST /api/vip/convert', points);

// referral
export const referralSummary = () => todo<Record<string, unknown>>('GET /api/referral/summary');
export const claimReferral = () => todo<void>('POST /api/referral/claim');

// bonuses
/** PUBLIC */
export const availableBonuses = () => todo<Bonus[]>('GET /api/bonus/available');
export const myBonuses = (status?: string) => todo<Bonus[]>('GET /api/bonus/my-bonuses', status);
export const claimRealTimeBonus = () => todo<void>('POST /api/bonus/real-time/claim');
export const turnover = (query: PageQuery = {}) => todo<Paged<LedgerRow>>('GET /api/bonus/turnover', query);
