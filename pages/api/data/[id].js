import rateLimiter from "../../../lib/rateLimiter";

export default function handler(req, res) {
  if (!rateLimiter(req, res)) return;

  const { id } = req.query;

  res.status(200).json({
    id,
    title: `Page ${id}`,
    content: `This is the content for page ${id}.`,
    createdAt: new Date().toISOString(),
    views: Math.floor(Math.random() * 5000),
    author: `Author ${Math.floor(Math.random() * 100)}`,
    tags: ['tag1', 'tag2'],
  });
}
