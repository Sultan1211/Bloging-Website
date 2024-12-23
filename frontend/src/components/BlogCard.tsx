import React from 'react'
import { Link } from 'react-router-dom';

interface BlogCardProps {
    id:string
    authorName: string;
    title: string;
    content: string;
    publishedDate: string
}

function BlogCard({id, authorName, title, content, publishedDate }: BlogCardProps) {
    return (<Link to={`/blog/${id}`}>
        <div className='p-4 border-b-2 border-slate-200  max-w-screen-md mx-auto cursor-pointer transition-all duration-150 transform hover:scale-105 hover:bg-slate-500 hover:text-white hover:rounded-lg'>
            <div className='flex'>
                <div className='flex justify-center flex-col'>
                    <Avatar name={authorName} size="small" />
                </div>
                <div className='flex mt-1'>
                    <div className='font-extralight px-2 text-sm'>
                        {authorName}
                    </div>
                    <div className=''>
                        &#128900;
                    </div>
                    <div className='font-thin text-slate-500 mx-2 text-sm'>
                        {publishedDate}
                    </div>
                </div>
            </div>
            <div className='text-xl font-semibold'>
                {title}
            </div>
            <div className='text-sm font-thin'>
                {content.slice(0, 250) + "..."}
            </div>
            <div className='text-slate-400 text-xs pt-4'>
                {`${Math.ceil(content.length / 100)} min read `}
            </div>

        </div>


    </Link>


    )
}
export function Avatar({ name, size }: { name: string| "", size: "small" | "big" }) {
    return <div className={`relative inline-flex items-center justify-center ${size === "small" ? "w-5 h-5" : "w-10 h-10"} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
        <span className={`font-normal ${size === "small" ? "text-xs" : "text-lg uppercase font-semibold"} text-gray-200 uppercase`}>{name[0]}</span>
    </div>

}

export default BlogCard