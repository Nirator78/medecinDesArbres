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
        <img class="inline object-cover w-12 h-12 mr-2 rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
      </div>
    )
}