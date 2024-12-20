'use client'
import React, { useEffect } from 'react';
import { getPost } from '../getPosts';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { urlForImage } from '@/sanity/lib/image';
import { PostType } from '@/types/postType';
import { IconArrowLeft } from '@tabler/icons-react';
import Link from 'next/link';
import ToTopButton from '@/app/components/ui/ToTopButton';

interface PostProps {
  slug: string;
}

const Post: React.FC<PostProps> = ({ slug }) => {
  const [post, setPost] = React.useState<PostType | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      const fetchedPost = await getPost(slug);
      setPost(fetchedPost);
      window.scrollTo(0, 0); // Scroll to top when the post is fetched
    };

    fetchPost();
  }, [slug]);

  if (!post) {
    return <div>Блог поста не е намерен</div>;
  }

  return (
    <article className="max-w-5xl mx-auto mt-32 p-6 rounded-lg">
      <div className='flex flex-row justify-start items-center'>
        <div className='absolute top-28 left-4'>
          <Link href="/about#blog">
            <IconArrowLeft className='size-11 text-black' />
          </Link>
        </div>
        <h1 className="text-4xl text-center text-black font-bold mb-8 px-2">{post.title}</h1>
      </div>
      {post.mainImage && (
        <div className="flex w-full justify-center mx-auto mb-8 rounded-xl overflow-hidden">
          <Image
            src={post.mainImage.asset.url}
            alt={post.mainImage.alt || post.title}
            width={800}
            height={450}
            className="rounded-xl"
          />
        </div>
      )}
      <div className="flex flex-col text-right">
        <div className="text-gray-800 mb-2">
          Публикувано на {new Date(post.publishedAt).toLocaleDateString()}
        </div>
        <div className="text-gray-800 mb-6">
          От {post.author.name}
        </div>
      </div>
      <div className="mb-2">
        {post.categories.length > 1 ? (
          <ul className="flex justify-evenly text-purple-600 uppercase text-xs">
            {post.categories.map((category) => (
              <li className='' key={category._id}>{category.title}</li>
            ))}
          </ul>
        ) : (
          <span className="text-purple-600 uppercase text-xs">
            {post.categories[0]?.title || 'Category'}
          </span>
        )}
      </div>
      <div className="prose text-lg max-w-none text-gray-900">
        <PortableText value={post.body} components={{}} />
      </div>
      <ToTopButton />
    </article>
  );
};

export default Post;