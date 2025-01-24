
import Appbar from './Appbar';
import { Avatar } from './BlogCard';
import { Blog } from '../hooks';

function FullBlog({ blog }: { blog?: Blog }) {
  if (!blog) {
    return (
      <div className="h-screen">
        <Appbar />
        <p>Blog content not available.</p>
      </div>
    );
  }

  return (
    <div className='h-screen'>
      <Appbar />
      <div className='grid grid-cols-1 sm:grid-cols-12 max-w-screen-lg  lg:mx-auto mt-12 mx-3'>
        <div className='col-span-1 sm:col-span-8'>
          <div className='text-3xl font-bold'>
            {blog.title}
          </div>
          <div className='text-slate-400 pt-2'>
            Published on Dec 2nd 2024
          </div>
          <div className='pt-4'>
            {blog.content}
          </div>
        </div>

        <div className='col-span-1 sm:col-span-4 sm:ml-4 mt-6 sm:mt-0'>
          <div className='pl-4 text-slate-700'>
            Author
          </div>
          <div className='flex  p-3'>
            <div className='pr-2 mt-2'>
              <Avatar size={"big"} name={blog.author.name || "Anonymous"} />
            </div>
            <div className='pl-1.5'>
              <div className='text-lg font-semibold'>
                {blog.author.name}
              </div>
              <div className='text-slate-600 text-sm font-light'>
                This is the catchphrase for the author placed under the name of the author
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullBlog;
