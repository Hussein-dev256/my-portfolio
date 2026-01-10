type RateLimitEntry = {
  count: number;
  expiresAt: number;
};

const WINDOW_MS = 5 * 60 * 1000; // 5 minutes
const MAX_REQUESTS = 5;

function getStore(): Map<string, RateLimitEntry> {
  const g = global as unknown as { __rateLimitStore?: Map<string, RateLimitEntry> };
  if (!g.__rateLimitStore) {
    g.__rateLimitStore = new Map();
  }
  return g.__rateLimitStore;
}

export function rateLimit(key: string): { limited: boolean } {
  const store = getStore();
  const now = Date.now();
  const existing = store.get(key);

  if (!existing || existing.expiresAt < now) {
    store.set(key, { count: 1, expiresAt: now + WINDOW_MS });
    return { limited: false };
  }

  if (existing.count >= MAX_REQUESTS) {
    return { limited: true };
  }

  existing.count += 1;
  store.set(key, existing);
  return { limited: false };
}
