/**
 * Error thrown for non-2xx player API responses (backend shape: `{ code, message }`).
 * UI should handle 400, 401, 403, 404, 409, 410 (expired checkout), 429 and 5xx distinctly.
 */
export class ApiError extends Error {
  readonly status: number;
  readonly payload: unknown;

  constructor(status: number, message: string, payload?: unknown) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.payload = payload;
  }
}

export const isApiError = (e: unknown): e is ApiError => e instanceof ApiError;
