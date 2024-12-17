import React from 'react'
import Appbar from './Appbar'
import { Avatar } from './BlogCard'
import { Blog } from '../hooks'

function FullBlog({blog}: {blog:Blog}) {
    return (
        <div className='h-screen'>
            <Appbar />
            <div className='grid grid-cols-12 max-w-screen-lg mx-auto mt-12 '>
                <div className='col-span-8 '>
                    <div className=' text-3xl font-bold'>
                        {blog.title}
                    </div>
                    <div className='text-slate-400 pt-2'>
                        Published on Dec 2nd 2024
                    </div>
                    <div className='pt-4 text-'>
                       {blog.content}

                    </div>
                </div>
                <div className=' col-span-4 ml-4 '>
                    <div className='pl-4 text-slate-700'>
                        Author
                    </div>
                    <div className='flex items-center p-3'>
                        <div className='pr-2'>
                           <Avatar size={"big"} name={blog.author?.name || "Anonymous"} />
                        </div>
                        <div className='pl-1.5'>
                        <div className='text-lg font-semibold '>
                            Author Name
                        </div>
                        <div className='text-slate-600 text-sm font-light'>
                          This is the catch phrace for the author placed under the name of the author
                        </div>
                        </div>
                       
                    </div>
                    


                </div>

            </div>
        </div>
    )
}

export default FullBlog