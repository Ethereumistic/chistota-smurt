import Image from 'next/image'
import { getPosts } from './getPosts'
import Link from 'next/link'

export default async function About() {
  const posts = await getPosts()

   // Sort posts by publishedAt date in descending order
   const sortedPosts = posts.sort((a, b) => {
    const dateA = new Date(a.publishedAt); // Parse publishedAt to Date
    const dateB = new Date(b.publishedAt); // Parse publishedAt to Date
    return dateB.getTime() - dateA.getTime(); // Compare timestamps
  });
   
  return (  
    <div>
      <h1 className="text-6xl text-llblue font-bold text-center mb-12">Историята на Филма</h1>
      <div className="w-full mx-auto bg-dblue text-cream py-16 flex justify-center items-center">

        {/* Flex Layout */}
        <div className="flex flex-wrap justify-center max-w-6xl mx-auto">
        {sortedPosts.map((post) => (
            <Link
              href={`/about/${post.slug.current}`}
              key={post._id}
              className="flex flex-col items-center overflow-hidden transition-all duration-300 w-full sm:w-1/2 lg:w-1/3 p-4"
            >
              {/* Content */}
              <div className="flex flex-col justify-between h-full w-full bg-dblue p-6 rounded-lg border-2 border-llblue">

                            {/* Image */}
                            {post.mainImage && (
              <div className="relative w-full h-64 mb-4 rounded-xl overflow-hidden"> {/* Set a fixed height for the square */}
                <Image
                  src={post.mainImage.asset.url}
                  alt={post.mainImage.alt || post.title}
                  layout="fill" // Use layout fill to cover the parent div
                  objectFit="cover" // Maintain aspect ratio
                  className="rounded-xl" // Keep rounded corners
                />
              </div>
            )}

                {/* Categories - Render all categories if there are multiple */}
                <div className="text-llblue uppercase text-xs mb-2">
                  {post.categories.length > 1 
                    ? post.categories.map(category => category.title).join(' ') 
                    : post.categories[0]?.title || 'Category'}
                </div>

                {/* Title */}
                <h2 className="text-2xl font-semibold mb-4 text-cream flex-1">{post.title}</h2>

                {/* Meta Information */}
                <div className="text-llblue text-sm flex items-center space-x-2 mt-auto">
                  <span>{post.author.name || 'Author'}</span>
                  <span>&bull;</span>
                  <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}