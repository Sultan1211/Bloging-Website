import React from 'react'

interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string
}

function BlogCard({ authorName, title, content, publishedDate }: BlogCardProps) {
    return (
        <div className='p-4 border-b-2 border-slate-100'>
            <div className='flex'>
                <div className='flex justify-center flex-col'>
                    <Avatar name={authorName} />
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

    )
}
function Avatar({ name }: { name: string }) {
    return <div className="relative inline-flex items-center justify-center w-5 h-5 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <span className="font-normal text-xs text-gray-300">{name[0]}</span>
    </div>

}

export default BlogCard