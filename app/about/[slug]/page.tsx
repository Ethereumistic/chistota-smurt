import { getPost } from '../getPosts'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { urlForImage } from '@/sanity/lib/image'
import { PostType } from '@/types/postType'
import { IconArrowLeft } from '@tabler/icons-react'
import Link from 'next/link'

const components = {
    types: {
      image: ({ value }: { value: any }) => {
        if (!value?.asset?._ref) {
          return null
        }
        return (
          <figure className="my-8 w-full max-w-4xl mx-auto">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <Image
                src={urlForImage(value).width(800).height(450).fit('max').auto('format').url()}
                alt={value.alt || ' '}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'contain' }}
                className="rounded-lg"
              />
            </div>
            {value.caption && (
              <figcaption className="text-center text-sm mt-2 text-gray-600">
                {value.caption}
              </figcaption>
            )}
          </figure>
        )
      },
    },
  };

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)

  if (!post) {
    return <div>Блог поста не е намерен</div>
  }

  return (
    <article className="max-w-5xl mx-auto mt-32 p-6  rounded-lg">
      <div className='flex flex-row justify-start items-center'>
      <div className='absolute top-28 left-4'>
        <Link href="/about">
        <IconArrowLeft className='size-11 text-black' />
        </Link>
      </div>
      <h1 className="text-4xl text-center text-black font-bold mb-8 px-2">{post.title}</h1>
      </div>
      {post.mainImage && (
        <div className="flex  w-full justify-center mx-auto mb-8 rounded-xl overflow-hidden">
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
                {/* Categories - Render all categories if there are multiple */}
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
      <PortableText value={post.body} components={components} />
      </div>
    </article>
  )
}