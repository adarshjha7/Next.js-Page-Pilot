import { generateMockData } from '../../lib/dataGenerator';

export async function getServerSideProps({ params, res }) {
  console.log("SSR rendered:", params.id); 

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );

  const data = generateMockData(params.id);
  
  return {
    props: {
      data,
    },
  };
}

export default function SSRPage({ data }) {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
      <p>Views: {data.views}</p>
      <p>Author: {data.author}</p>
      <p>Tags: {data.tags.join(', ')}</p>
    </div>
  );
}