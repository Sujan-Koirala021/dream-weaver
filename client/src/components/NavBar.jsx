import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

function NavBar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    navigate('/login'); // Redirect to login page after logout
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-gray-800 text-white'>
      <div className='flex flex-row items-center justify-between p-4'>
        <div className='text-lg font-bold ml-8 flex'>
        <Link to="/">
          <PaperAirplaneIcon className="h-7 w-7 text-white mr-5" />
        </Link>
          <div>
            Dream Weaver
          </div>
        </div>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-white focus:outline-none'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
            </svg>
          </button>
        </div>
        <div className={`hidden md:flex md:flex-row md:items-center ${isOpen ? 'flex flex-col w-full' : ''}`}>
          <Link to="/" className='block p-4 text-white '>Home</Link>
          <Link to="/about" className='block p-4 text-white'>About</Link>
          <Link to="/contact-us" className='block p-4 text-white '>Contact Us</Link>
          <Link to="/interpret">
          <div className='button cursor-pointer'>Get Started</div>          
          </Link>
        </div>
      </div>
      {isOpen && (
        <div className='md:hidden'>
          <Link to="/" className='block p-4 text-gray-700 hover:bg-gray-300'>Home</Link>
          <Link to="/about" className='block p-4 text-gray-700 hover:bg-gray-300'>About</Link>
          <Link to="/contact-us" className='block p-4 text-gray-700 hover:bg-gray-300'>Contact</Link>

          <Link to="/interpret-dream" className='block p-4 text-gray-700 hover:bg-gray-300'>Interpret Dream</Link>
        </div>
      )}
    </div>
  );
}

export default NavBar;
