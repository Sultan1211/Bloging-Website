import { Avatar } from './BlogCard';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../logos/logo.png';

function Appbar() {
  const name: any = localStorage.getItem("name");
  const navigate = useNavigate();
  return (
    <div className='bg-white border-b-2 border-blue-100 shadow-md flex justify-between items-center h-16 w-full px-4 sm:px-10'>
      <Link to={"/blogs"}>
        <div className='font-semibold h-16 w-20'>
          <img
            src={logo}
            alt="BlogHive Logo"
            className="h-full w-full object-contain"
          />
        </div>
      </Link>
      
      <div className='text-xl sm:text-3xl font-bold transition-all duration-150 transform hover:scale-110 hover:font-light'>
        VerseLine
      </div>
      
      <div className='flex items-center space-x-2 sm:space-x-4'>
        <button
          type="button"
          onClick={() => navigate("/publish")}
          className="text-white text-center bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-xs sm:text-sm px-4 sm:px-5 py-1 sm:py-2"
        >
          New Blog +
        </button>
        
        <Avatar name={name || "A"} size="big" />
      </div>
    </div>
  );
}

export default Appbar;
