import { generateMockData } from '../../lib/dataGenerator';

export async function getStaticPaths() {
  const paths = Array.from({ length: 100 }, (_, i) => ({
    params: { id: (i + 1).toString() },
  }));

  return { paths, fallback:'blocking' };
}

export async function getStaticProps({ params }) {
  const data = generateMockData(params.id);  
  return {
    props: {
      data,
    },
    revalidate: 3600,
  };
}

export default function SSGPage({ data }) {
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