import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [randomSSGId, setRandomSSGId] = useState(null);
  const [randomSSRId, setRandomSSRId] = useState(null);

  useEffect(() => {
    setRandomSSGId(Math.floor(Math.random() * 100000) + 1);
    setRandomSSRId(Math.floor(Math.random() * 100000) + 1);
  }, []);

  if (randomSSGId === null || randomSSRId === null) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="container">
      <h1 className="main-heading">Next.js Page-Pilot</h1>
      <p className="intro-text">This app demonstrates:</p>
      <ul className="features-list">
        <li>1,00,000 SSG pages</li>
        <li>SSR pages</li>
        <li>Rate-limited API routes(100 Requests)
        </li>
      </ul>

      <h2 className="examples-heading">Implementations:</h2>
      <div className="link-cards">
        <div className="link-card">
          <h3>SSG Page</h3>
          <Link href={`/ssg/${randomSSGId}`} className="link">
            Visit SSG page {randomSSGId}
          </Link>
        </div>
        <div className="link-card">
          <h3>SSR Page</h3>
          <Link href={`/ssr/${randomSSRId}`} className="link">
            Visit SSR page {randomSSRId}
          </Link>
        </div>
        <div className="link-card">
          <h3>API Endpoint</h3>
          <Link href={`/api/data/${randomSSGId}`} className="link">
            Visit API endpoint for {randomSSGId}
          </Link>
        </div>
      </div>
    </div>
  );
}
