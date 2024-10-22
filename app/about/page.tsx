import Image from 'next/image'
import { getPosts } from './getPosts'
import Link from 'next/link'
import AboutUs from './AboutUs';
import dynamic from 'next/dynamic'
import AboutMov from './AboutMov';

const ReactLenis = dynamic(() => import('lenis/react').then((mod) => mod.ReactLenis), {
  ssr: false
})
export default async function About() {
  const posts = await getPosts()

   // Sort posts by publishedAt date in descending order
   const sortedPosts = posts.sort((a, b) => {
    const dateA = new Date(a.publishedAt); // Parse publishedAt to Date
    const dateB = new Date(b.publishedAt); // Parse publishedAt to Date
    return dateB.getTime() - dateA.getTime(); // Compare timestamps
  });
   
  return (  
    <ReactLenis
    root
    options={{
      lerp: 0.05,
    }}
  >
    <div className='mt-8'>
      <AboutMov />
      <AboutUs />
      <h1 className="text-5xl px-4 text-black uppercase font-bold text-center mb-12">Блог</h1>
      <div className="w-full mx-auto  pb-4 flex justify-center items-center">

        {/* Flex Layout */}
        <div className="flex flex-wrap justify-center max-w-[90%] sm:max-w-6xl bg-transparent mx-4 rounded-xl">
        {sortedPosts.map((post) => (
            <Link
              href={`/about/${post.slug.current}`}
              key={post._id}
              className="flex flex-col items-center overflow-hidden transition-all duration-300 w-full sm:w-1/2 lg:w-1/3 p-4"
            >
              {/* Content */}
              <div className="flex flex-col justify-between h-full w-full  p-6 ">

                            {/* Image */}
                            {post.mainImage && (
              <div className="relative w-full h-64 mb-1 rounded-xl overflow-hidden"> {/* Set a fixed height for the square */}
                <Image
                  src={post.mainImage.asset.url}
                  alt={post.mainImage.alt || post.title}
                  layout="fill" // Use layout fill to cover the parent div
                  objectFit="cover" // Maintain aspect ratio
                  className="rounded-xl" // Keep rounded corners
                />
              </div>
            )}

                  {/* Meta Information */}
                  <div className="text-gray-900 text-sm flex justify-end items-center space-x-2 my-2">
                  <span>{post.author.name || 'Author'}</span>
                  <span>&bull;</span>
                  <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                </div>

                {/* Categories - Render all categories if there are multiple */}
                <div className="mb-2">
                  {post.categories.length > 1 ? (
                    <ul className="flex justify-between text-purple-600 uppercase text-xs">
                      {post.categories.map((category) => (
                        <li key={category._id}>{category.title}</li>
                      ))}
                    </ul>
                  ) : (
                    <span className="text-purple-600 uppercase text-xs">
                      {post.categories[0]?.title || 'Category'}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h2 className="text-2xl font-semibold mb-4 text-black flex-1">{post.title}</h2>


              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </ReactLenis>
  )
}