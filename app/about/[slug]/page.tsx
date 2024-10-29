// app/about/[slug]/page.tsx
import Post from './Post';

export default function SlugPage({ params }: { params: { slug: string } }) {
  return <Post slug={params.slug} />;
}