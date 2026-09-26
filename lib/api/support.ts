import { todo } from './client';
import type { SupportConversation, SupportMessage } from './types';

// TODO: implement each call. All send the same `X-Support-Guest` token (see tokens.ts).

export const MAX_ATTACHMENTS = 8;
export const MAX_ATTACHMENT_BYTES = 20 * 1024 * 1024;

/** body: guest_token, force_new — creates or reuses the guest conversation. */
export const openConversation = (force_new = false) => todo<SupportConversation>('POST /api/support/conversations', force_new);
export const currentConversation = () => todo<SupportConversation | null>('GET /api/support/conversations/current');
export const messages = (conversationId: string) => todo<SupportMessage[]>('GET /api/support/conversations/:id/messages', conversationId);
export const sendMessage = (conversationId: string, body: string, topic?: string) =>
  todo<SupportMessage>('POST /api/support/conversations/:id/messages', conversationId, body, topic);
/** multipart/form-data, repeated `files` field, max 8 files × 20 MB. */
export const uploadAttachments = (conversationId: string, files: File[]) =>
  todo<unknown>('POST /api/support/conversations/:id/attachments', conversationId, files);
