import { LRUCache } from 'lru-cache';
const tokenCache = new LRUCache({
  max: 100,
  ttl: 60 * 1000, // 1 minute
});

export default function rateLimiter(req, res) {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '127.0.0.1';

  const tokenCount = tokenCache.get(ip) || 0;

  if (tokenCount >= 100) {
    res.status(429).json({ success: false, message: 'Too many requests. Please try again later.' });
    return false;
  }

  tokenCache.set(ip, tokenCount + 1);
  return true;
}
