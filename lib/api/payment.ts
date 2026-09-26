import { todo } from './client';
import type { CheckoutStatus, LedgerRow, ManualCheckout, ManualCheckoutInput, WpayPayinInput, WpayPayoutInput } from './types';

// TODO: implement each call.
// Manual deposit flow: createManualCheckout → redirect to data.redirect_url → submitManualCheckout
// with the player's transfer reference → poll manualCheckoutStatus until approved/rejected.
// Checkout expires after 15 minutes (410).

/** AUTH */
export const createManualCheckout = (input: ManualCheckoutInput) => todo<ManualCheckout>('POST /api/payment/manual/checkout', input);
/** PUBLIC */
export const getManualCheckout = (token: string) => todo<ManualCheckout>('GET /api/payment/manual/checkout/:token', token);
/** PUBLIC */
export const manualCheckoutStatus = (token: string) => todo<CheckoutStatus>('GET /api/payment/manual/checkout/:token/status', token);
/** PUBLIC */
export const submitManualCheckout = (token: string, transaction_id: string) =>
  todo<void>('POST /api/payment/manual/checkout/:token/submit', token, transaction_id);

// WPay (AUTH)
export const wpayPayin = (input: WpayPayinInput) => todo<Record<string, unknown>>('POST /api/payment/wpay/payin', input);
export const wpayPayinById = (depositId: string) => todo<LedgerRow>('GET /api/payment/wpay/payin/:depositId', depositId);
export const wpayPayinByReference = (reference: string) => todo<LedgerRow>('GET /api/payment/wpay/payin/reference/:reference', reference);
export const wpayPayout = (input: WpayPayoutInput) => todo<LedgerRow>('POST /api/payment/wpay/payout', input);
