import BlogCard from '../components/BlogCard';
import Appbar from '../components/Appbar';
import { useBlogs } from '../hooks';
import { BlogsSkeleton } from '../components/BlogsSkeleton';

function Blogs() {
    const { loading, blogs } = useBlogs();

    if (loading) {
        return (
            <div className="mt-16 w-full flex flex-col max-w-screen-md mx-auto">
                <BlogsSkeleton />
                <BlogsSkeleton />
                <BlogsSkeleton />
            </div>
        );
    }

    return (
        <div className='bg-gray12'>
            <div>
                <Appbar />
            </div>
      

            {/* Corrected the background-image syntax */}
            <div
                className="flex justify-center bg-slate-100 "
            >
                <div className=''>
                    {blogs.map((blog) => (
                        <BlogCard
                            key={blog.id}
                            id={blog.id}
                            authorName={blog.author.name || 'Anonymous'}
                            title={blog.title}
                            content={blog.content}
                            publishedDate={'4 5 2010'}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Blogs;
