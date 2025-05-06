export default async function handler(req, res) {
    try {
      const healthcheck = {
        uptime: process.uptime(),
        message: 'OK',
        timestamp: Date.now()
      };
      
      return res.status(200).json(healthcheck);
    } catch (err) {
      console.error('Healthcheck failed:', err);
      return res.status(503).json({ message: 'Service unavailable' });
    }
  }