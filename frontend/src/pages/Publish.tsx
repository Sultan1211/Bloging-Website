import { useState } from 'react'
import Appbar from '../components/Appbar'
import axios from 'axios';
import { BACKEND_URL } from '../config';
import { useNavigate } from 'react-router-dom';

function Publish() {
    const [title,setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();
    async function sendBlog() {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                console.error("No token found. Please log in.");
                return;
            }
            const response = await axios.post(
                `${BACKEND_URL}/api/v1/blog`,
                { title, content },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log(response.data);
            navigate(`/blog/${response.data.id}`)
        } catch (error:any) {
            console.error("Error publishing blog:", error.response?.data || error.message);
            alert("Failed to publish the blog. Please try again.");
        }
    }
    
    
    return (
        <div>
            <div>
                <Appbar />
            </div>
            <div className='max-w-screen-md mx-auto h-[50vh] pt-10'>
                <div className='pb-3'>
                <input type="text" onChange={(e)=> setTitle(e.target.value)} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 tracking-wide text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Title" required />

                </div>
                <div className=''>
                    <textarea id="message" onChange={(e)=> setContent(e.target.value)} className="block p-2.5 w-full h-60 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 outline-none" placeholder="Write your blog here..."></textarea>

                </div>
                <div>
                <button type="button" onClick={sendBlog} className="p-2 my-4 bg-blue-500 font-semibold text-white rounded cursor-pointe hover:bg-blue-700">Publish Blog</button>

                </div>


            </div>



        </div>
    )
}

export default Publish