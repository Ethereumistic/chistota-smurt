'use client'
import { useEffect, useState } from 'react';
import { getPosts } from './getPosts'; // Adjust the import path as necessary
import Link from 'next/link';
import Image from 'next/image';

const Posts = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // You can customize the loading state
  }

  return (
    <div className="flex flex-wrap justify-center max-w-[90%] sm:max-w-6xl bg-transparent mx-4 rounded-xl">
      {posts.map((post) => (
        <Link
          href={`/about/${post.slug.current}`}
          key={post._id}
          className="flex flex-col items-center overflow-hidden transition-all duration-300 w-full sm:w-1/2 lg:w-1/3 p-4"
        >
          <div className="flex flex-col justify-between h-full w-full p-6">
            {post.mainImage && (
              <div className="relative w-full h-64 mb-1 rounded-xl overflow-hidden">
                <Image
                  src={post.mainImage.asset.url}
                  alt={post.mainImage.alt || post.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>
            )}
            <h2 className="text-2xl font-semibold mb-4 text-black flex-1">{post.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Posts;