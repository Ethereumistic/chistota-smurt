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
      
      // Sort posts by publishedAt date in descending order
      const sortedPosts = fetchedPosts.sort((a, b) => {
        const dateA = new Date(a.publishedAt); // Parse publishedAt to Date
        const dateB = new Date(b.publishedAt); // Parse publishedAt to Date
        return dateB.getTime() - dateA.getTime(); // Compare timestamps
      });

      setPosts(sortedPosts);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Зареждане...</div>; // You can customize the loading state
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 max-w-6xl mx-auto">
        {posts.map((post) => (
          <Link
            href={`/about/${post.slug.current}`}
            key={post._id}
            className="flex flex-col bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            {/* Image Container */}
            {post.mainImage && (
              <div className="relative w-full aspect-square">
                <Image
                  src={post.mainImage.asset.url}
                  alt={post.mainImage.alt || post.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-xl"
                />
              </div>
            )}

            {/* Content Container */}
            <div className="p-6 flex flex-col flex-grow">
              {/* Categories */}
              <div className="mb-2">
                {post.categories.length > 1 ? (
                  <div className="flex flex-wrap gap-2">
                    {post.categories.map((category: any) => (
                      <span key={category._id} className="text-purple-600 uppercase text-xs">
                        {category.title}
                      </span>
                    ))}
                  </div>
                ) : (
                  <span className="text-purple-600 uppercase text-xs">
                    {post.categories[0]?.title || 'Category'}
                  </span>
                )}
              </div>

              {/* Title */}
              <h2 className="text-2xl font-semibold mb-4 text-black">{post.title}</h2>

              {/* Meta Information */}
              <div className="text-gray-900 text-sm flex items-center space-x-2 mt-auto">
                <span>{post.author.name || 'Author'}</span>
                <span>&bull;</span>
                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Posts;