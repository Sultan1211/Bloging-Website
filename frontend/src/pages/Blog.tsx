import React, { useState } from 'react'
import { useBlog } from '../hooks'
import { useParams } from 'react-router-dom';
import FullBlog from '../components/FullBlog';
import { FullBlogSkeleton } from '../components/FullBlogSkeleton';

function Blog() {
  const {id} = useParams();
  const {blog,loading} = useBlog({
    id : id || ""
  });
  if(loading){
    return <div className='mt-16'>
               <FullBlogSkeleton/>
           </div>
  }
  return (
    <div><FullBlog blog={blog}/></div>
  )
}

export default Blog
