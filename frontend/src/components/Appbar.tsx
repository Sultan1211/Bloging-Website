import React from 'react'
import { Avatar } from './BlogCard'
import { Link } from 'react-router-dom'

function Appbar() {
  return (
    <div className='border flex justify-between items-center h-16 w-screen px-10'>
      <Link to={"/blogs"}>
      <div className='font-semibold  '>
            Medium
        </div>
      
      
      </Link>
        
        <div>
            <Avatar name="Harkirat" size="big"></Avatar>
        </div>
    </div>
  )
}

export default Appbar