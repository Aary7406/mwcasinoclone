import { todo } from './client';
import type { ActivityLog, AuthSession, LoginInput, PlayerProfile, ProfileUpdate, RegisterInput } from './types';

// TODO: implement each call. Access is noted per endpoint (PUBLIC / AUTH).

/** PUBLIC — store both tokens on success. */
export const login = (input: LoginInput) => todo<AuthSession>('POST /api/auth/login', input);
/** PUBLIC — returns tokens + user like login. */
export const register = (input: RegisterInput) => todo<AuthSession>('POST /api/auth/register', input);
/** AUTH — body: refresh_token (optional); clear local tokens regardless. */
export const logout = () => todo<void>('POST /api/auth/logout');
/** AUTH */
export const me = () => todo<PlayerProfile>('GET /api/auth/me');
/** PUBLIC — 4-16 lowercase letters/numbers. */
export const checkUsername = (username: string) => todo<{ username: string; available: boolean }>('GET /api/auth/check-username', username);
/** AUTH — partial update. */
export const updateProfile = (input: ProfileUpdate) => todo<PlayerProfile>('PATCH /api/auth/profile', input);
/** AUTH */
export const changePassword = (current_password: string, new_password: string) =>
  todo<void>('POST /api/auth/change-password', current_password, new_password);
/** AUTH — limit max 50. */
export const activityLogs = (limit = 20) => todo<ActivityLog[]>('GET /api/auth/activity-logs', limit);

// email verification (AUTH)
export const sendEmailOtp = (email: string) => todo<void>('POST /api/auth/email/send-otp', email);
export const verifyEmailOtp = (otp: string) => todo<void>('POST /api/auth/email/verify-otp', otp);

// phone verification (AUTH)
export const startPhoneVerification = (phone: string) => todo<void>('POST /api/auth/phones/add/start', phone);
export const resendPhoneOtp = (phone: string) => todo<void>('POST /api/auth/phones/add/resend', phone);
export const verifyNewPhone = (otp: string) => todo<void>('POST /api/auth/phones/add/verify-new', otp);
export const verifyPrimaryPhone = (otp: string) => todo<void>('POST /api/auth/phones/add/verify-primary', otp);
