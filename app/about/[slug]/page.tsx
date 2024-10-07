import { getPost } from '../getPosts'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { urlForImage } from '@/sanity/lib/image'

const components = {
    types: {
      image: ({ value }: { value: any }) => {
        if (!value?.asset?._ref) {
          return null
        }
        return (
          <div className="relative w-full h-96 mb-4 rounded-xl overflow-hidden">
            <Image
              src={urlForImage(value).url()}
              alt={value.alt || 'Embedded image'}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-xl "
            />
          </div>
        )
      },
    },
  };

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <article className="max-w-5xl mx-auto mt-32 p-6  rounded-lg">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      {post.mainImage && (
        <div className="relative w-full h-64 mb-4 rounded-xl overflow-hidden">
          <Image
            src={post.mainImage.asset.url}
            alt={post.mainImage.alt || post.title}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
      )}
      <div className="flex flex-col text-right">
      <div className="text-gray-300 mb-2">
        Публикувано на {new Date(post.publishedAt).toLocaleDateString()}
      </div>
      <div className="text-gray-300 mb-6">
        От {post.author.name}
      </div>
      </div>
      {/* Categories - Render all categories if there are multiple */}
      <div className="text-llblue uppercase text-xs mb-4">
        {post.categories.length > 1 
          ? post.categories.map(category => category.title).join(', ') 
          : post.categories[0]?.title || 'Category'}
      </div>
      <div className="prose max-w-none">
      <PortableText value={post.body} components={components} />
      </div>
    </article>
  )
}