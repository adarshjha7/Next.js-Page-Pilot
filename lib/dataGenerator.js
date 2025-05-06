export function generateMockData(id) {
  return {
    id,
    title: `Page ${id}`,
    content: `This is the content for page ${id}.`,
    createdAt: new Date().toISOString(),
    views: Math.floor(Math.random() * 10000),
    author: `Author ${Math.floor(Math.random() * 100)}`,
    tags: ['tag1', 'tag2', 'tag3'].slice(0, Math.floor(Math.random() * 3) + 1)
  };
}

export function generateAllPaths() {
  const paths = [];
  for (let i = 1; i <= 100000; i++) {
    paths.push({ params: { id: i.toString() } });
  }
  return paths;
}



