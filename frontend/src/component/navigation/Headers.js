import React from 'react';

export default function Headers () {
    return (
      <div className="block px-4 py-2 rounded-md flex space-x-2 p-4 ">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span className="sr-only">Workflow</span>
            <img
            className="h-8 w-auto sm:h-10"
            src="logo.png"
            alt=""
            />
          </a>
        </div>
        <div>
          <a
            href="#"
            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-400 hover:bg-green-500"
          >
            Sign up
          </a>
        </div>  
        <div className="flex items-center px-5">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 26 26" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <div className="flex-shrink-0">
            <img className="h-10 w-10 rounded-full"  src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image" alt="" />
          </div>
        </div>
      </div>
    )
}