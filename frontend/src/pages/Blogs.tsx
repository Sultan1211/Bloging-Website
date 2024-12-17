import React from 'react'
import BlogCard from '../components/BlogCard'
import Appbar from '../components/Appbar'
import { useBlogs } from '../hooks'

function Blogs() {
    const { loading, blogs } = useBlogs();
    if(loading){
        return <div>
            Loading...
        </div>
    }
    return (
        <div>
            <div>
                <Appbar />
            </div>

            <div className='flex justify-center'>

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