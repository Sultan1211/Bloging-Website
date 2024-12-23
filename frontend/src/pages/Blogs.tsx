import React from 'react'
import BlogCard from '../components/BlogCard'
import Appbar from '../components/Appbar'
import { useBlogs } from '../hooks'
import { BlogsSkeleton } from '../components/BlogsSkeleton';

function Blogs() {
    const { loading, blogs } = useBlogs();
    if(loading){
        return (
            <div className="mt-16 w-full flex flex-col max-w-screen-md mx-auto ">
                <BlogsSkeleton />
                <BlogsSkeleton />
                <BlogsSkeleton />
               
               
            </div>
        );
        
    }
    return (
        <div>
            <div>
                <Appbar />
            </div>

            <div className='flex justify-center bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/diagonal-lines.png')'>

                <div className='  '>
                    {blogs.map(blog => <BlogCard 
                    id={blog.id}
                    authorName={blog.author.name || "Anonymus"}
                    title={blog.title}
                    content={blog.content}
                    publishedDate={"4 5 2010"}/>)}





                </div>


            </div>





        </div>

    )
}

export default Blogs