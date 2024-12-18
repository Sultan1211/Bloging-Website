import React from 'react'
import { Avatar } from './BlogCard'
import { Link, useNavigate } from 'react-router-dom'

function Appbar() {
  const navigate = useNavigate();
  return (
    <div className='border flex justify-between items-center h-16 w-screen px-10'>
        <Link to={"/blogs"}>
          <div className='font-semibold  '>
            Medium
          </div>


        </Link>
        <div className='flex'>
          <div>
          <button type="button" onClick={() => navigate("/publish")} className="text-white text-center bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2 text-center mx-2">New Blog +</button>



          </div>


        <div>
          <Avatar name="Harkirat" size="big"></Avatar>
        </div>

        </div>
    </div>
  )
}

export default Appbar