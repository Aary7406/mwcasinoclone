/**
 * Player API client — TO BE IMPLEMENTED.
 *
 * Contract (see public/gamex24-user-frontend-api-handoff.md):
 * - Base: `${API_ORIGIN}/api/...` (never `/v1`).
 * - Headers: `Content-Type: application/json` on JSON bodies, `X-Site-Host: <hostname>`,
 *   `Authorization: Bearer <access_token>` on AUTH routes, `X-Support-Guest` on support routes.
 * - Success envelope: `{ data, meta?, message? }`. Error: `{ code, message }` → throw `ApiError`.
 * - On 401 for an AUTH route: single-flight refresh via POST /api/auth/refresh, retry once.
 */

export type PageMeta = { page: number; limit: number; total: number; total_pages: number; [k: string]: unknown };
export type Envelope<T> = { data: T; meta?: PageMeta; message?: string };
export type Paged<T> = { data: T[]; meta: PageMeta };

export type RequestOptions = {
  method?: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';
  query?: Record<string, string | number | boolean | null | undefined>;
  body?: unknown;
  /** multipart (support attachments) — don't set Content-Type, let the browser add the boundary */
  form?: FormData;
  /** true = protected route, 'optional' = send token if logged in, false = public */
  auth?: boolean | 'optional';
  supportGuest?: boolean;
  signal?: AbortSignal;
  keepalive?: boolean;
};

/** Placeholder every stub returns until the call is wired up. */
export function todo<T>(endpoint: string, ..._args: unknown[]): Promise<T> {
  void _args;
  return Promise.reject(new Error(`Not implemented: ${endpoint}`));
}

// TODO: implement — returns the full `{ data, meta, message }` envelope.
export function request<T>(path: string, opts: RequestOptions = {}): Promise<Envelope<T>> {
  return todo(`request ${opts.method ?? 'GET'} ${path}`);
}

// TODO: implement — POST /api/auth/refresh, single-flight, rotates both tokens.
export function refreshSession(): Promise<void> {
  return todo('POST /api/auth/refresh');
}
