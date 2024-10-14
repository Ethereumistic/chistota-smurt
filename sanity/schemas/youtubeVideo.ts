import { defineType } from 'sanity'

export default defineType({
  name: 'youtubeVideo',
  title: 'YouTube Video',
  type: 'document',
  fields: [
    {
      name: 'trailerUrl',
      title: 'Trailer URL',
      type: 'url',
    },
    {
      name: 'movieUrl',
      title: 'Movie URL',
      type: 'url',
    },
  ],
})