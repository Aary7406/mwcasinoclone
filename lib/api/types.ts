/**
 * Player API data shapes. Fields marked from live responses were checked against the public
 * endpoints; authenticated shapes (profile, wallet, history) follow the handoff's "normalized
 * snake_case" description and keep an index signature — tighten them once you've seen real payloads.
 */

// ---- auth / profile ----------------------------------------------------------------------

export type PlayerProfile = {
  id?: string;
  username: string;
  full_name?: string;
  email?: string;
  email_verified?: boolean;
  phone?: string;
  phone_verified?: boolean;
  date_of_birth?: string;
  currency?: string;
  referral_code?: string;
  vip_level?: string | number;
  [k: string]: unknown;
};

export type AuthSession = { access_token: string; refresh_token: string; user: PlayerProfile };

export type LoginInput = { username: string; password: string };

export type RegisterInput = {
  username: string;
  password: string;
  phone?: string;
  full_name?: string;
  referral_code?: string;
  partner_code?: string;
  device_fingerprint?: string;
};

export type ProfileUpdate = { full_name?: string; date_of_birth?: string; email?: string };

export type ActivityLog = { created_at?: string; ip?: string; device?: string; action?: string; [k: string]: unknown };

// ---- wallet ------------------------------------------------------------------------------

export type WalletBalance = {
  balance?: number;
  main_balance?: number;
  bonus_balance?: number;
  currency?: string;
  [k: string]: unknown;
};

export type PaymentChannel = { code?: string; channel_code?: string; name?: string; [k: string]: unknown };

export type PaymentMethod = {
  code?: string;
  payment_method_code?: string;
  name?: string;
  image_url?: string;
  min_amount?: number;
  max_amount?: number;
  channels?: PaymentChannel[];
  [k: string]: unknown;
};

export type FundsConfig = {
  currency?: string;
  deposit_methods?: PaymentMethod[];
  withdraw_methods?: PaymentMethod[];
  verified_phones?: string[];
  [k: string]: unknown;
};

export type DepositRequest = {
  amount: number;
  payment_method_code?: string;
  wallet_number?: string;
  channel_code?: string;
  notes?: string;
  promotion_id?: string;
  transaction_id?: string;
};

export type WithdrawRequest = {
  amount: number;
  payment_method_code?: string;
  recipient_number?: string;
  recipient_name?: string;
  bank_name?: string;
  bank_account?: string;
  notes?: string;
};

export type HistoryQuery = {
  status?: string;
  payment_method_code?: string;
  from?: string;
  to?: string;
  sortBy?: string;
  page?: number;
  limit?: number;
};

export type TransactionsQuery = Omit<HistoryQuery, 'payment_method_code'> & { type?: string; balanceType?: string };

export type LedgerRow = {
  id?: string;
  transaction_id?: string;
  type?: string;
  status?: string;
  amount?: number;
  payment_method_code?: string;
  created_at?: string;
  [k: string]: unknown;
};

// ---- payments ----------------------------------------------------------------------------

export type ManualCheckoutInput = {
  amount: number;
  payment_method_code: string;
  channel_code: string;
  return_url: string;
  promotion_id?: string;
};

export type ManualCheckout = { token: string; redirect_url?: string; expires_at?: string; [k: string]: unknown };

export type CheckoutStatus = { status?: 'pending' | 'submitted' | 'approved' | 'rejected' | 'expired' | string; [k: string]: unknown };

export type WpayPayinInput = { amount: number; payment_method_code: string; phone?: string; return_url?: string; promotion_id?: string };
export type WpayPayoutInput = { amount: number; payment_method_code: string; recipient_number: string; recipient_name?: string };

// ---- catalogue / content (checked against live responses) ---------------------------------

export type Game = {
  _id: string;
  game_uid: string;
  game_code?: string;
  name: string;
  game_name?: string;
  provider_code: string;
  provider_name?: string;
  game_type?: string;
  image_url?: string;
  featured?: boolean;
  is_hot?: boolean;
  createdAt?: string;
  [k: string]: unknown;
};

export type GamesQuery = { category?: string; provider?: string; search?: string; page?: number; limit?: number };

export type Category = {
  id: string;
  name: string;
  slug: string;
  image_url?: string;
  description?: string;
  display_order?: number;
  is_active?: boolean;
};

export type Provider = {
  id: string;
  name: string;
  provider_code: string;
  image_url?: string;
  game_type?: string;
  display_order?: number;
  is_active?: boolean;
  categories?: Category[];
  /** keyed by catalogue category, e.g. `{ SLOTS: 12, CRASH: 3 }` */
  game_counts?: Record<string, number>;
  game_count?: number;
};

export type Banner = {
  id?: string;
  title?: string;
  subtitle?: string;
  label?: string;
  description?: string;
  image_url?: string;
  link_url?: string;
  sort_order?: number;
  promotion_id?: string | null;
  [k: string]: unknown;
};

export type HomeSections = {
  top_header_banners: Banner[];
  hero_slides: Banner[];
  favourite_banners: Banner[];
  catalogue: { categories: Category[]; providers: Provider[]; hot_games_enabled: boolean; hot_games: Game[] };
  site_settings: SiteSettings | null;
  social_links: { name?: string; url?: string; icon?: string; [k: string]: unknown }[];
  footer_menus: { title?: string; url?: string; [k: string]: unknown }[];
  notices: { id?: string; title?: string; content?: string; [k: string]: unknown }[];
};

export type SiteSettings = { support_links: Record<string, string>; app_url: string; [k: string]: unknown };

export type Promotion = {
  id?: string;
  _id?: string;
  title: string;
  description?: string;
  instructions?: string;
  conditions?: string;
  image?: string;
  status?: string;
  validity?: { startDate?: string; endDate?: string };
  [k: string]: unknown;
};

export type WinnerRow = { username?: string; game_name?: string; amount?: number; [k: string]: unknown };
export type WinnerBoard = { winnerBoardLeaderStats: { daily: WinnerRow[]; weekly: WinnerRow[] } };

// ---- games -------------------------------------------------------------------------------

export type LaunchInput = {
  game_uid: string;
  provider_code: string;
  language?: string;
  /** 1 = desktop, 2 = mobile */
  platform?: 1 | 2;
  home_url?: string;
};

export type LaunchResult = { launch_url?: string; game_url?: string; transfer_id?: string; [k: string]: unknown };

export type BetHistoryQuery = {
  site?: string;
  product?: string;
  game_id?: string;
  period?: string;
  from?: string;
  to?: string;
  sortBy?: string;
  page?: number;
  limit?: number;
};

// ---- account extras ----------------------------------------------------------------------

export type InboxMessage = { id?: string; title?: string; content?: string; is_read?: boolean; created_at?: string; [k: string]: unknown };

export type VipLevel = { name?: string; level?: number; min_points?: number; [k: string]: unknown };
export type VipStatus = { level?: VipLevel; points?: number; next_level?: VipLevel | null; progress?: number; [k: string]: unknown };

export type Bonus = { id: string; name: string; bonusType?: string; description?: string; isActive?: boolean; [k: string]: unknown };

// ---- support -----------------------------------------------------------------------------

export type SupportConversation = { id?: string; _id?: string; status?: string; [k: string]: unknown };
export type SupportMessage = { id?: string; body: string; topic?: string; sender?: string; created_at?: string; attachments?: unknown[]; [k: string]: unknown };
