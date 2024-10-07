import { PortableTextBlock } from '@portabletext/types'

export interface PostType {
  _id: string
  title: string
  slug: {
    current: string
  }
  mainImage: {
    asset: {
      _id: string
      url: string
    }
    alt: string
  }
  publishedAt: string
  body: PortableTextBlock[]
  author: {
    name: string
    image: {
      asset: {
        _id: string
        url: string
      }
    }
  }
  categories: {
    _id: string
    title: string
  }[]
}