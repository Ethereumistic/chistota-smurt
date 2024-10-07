import { client } from '@/sanity/lib/client'
import { PostType } from '@/types/postType'

export async function getPost(slug: string): Promise<PostType> {
  const query = `*[_type == "post" && slug.current == '${slug}'][0]{
    _id,
    title,
    slug,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    publishedAt,
    body,
    author->{
      name,
      image {
        asset->{
          _id,
          url
        }
      }
    },
    categories[]->{
      _id,
      title
    }
  }`
  return client.fetch(query)
}

export async function getPosts(): Promise<PostType[]> {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    publishedAt,
    author->{
      name,
      image {
        asset->{
          _id,
          url
        }
      }
    },
    categories[]->{
      _id,
      title
    }
  }`
  return client.fetch(query)
}

export async function getCategories() {
  const query = `*[_type == "category"]{
    _id,
    title,
    description
  }`
  return client.fetch(query)
}