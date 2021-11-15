import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavVertical () {
    return (
        <div className="flex px-4 py-2 rounded-md flex space-x-2 p-4 text-left">
            <nav>
                <NavLink exact to='/' className='block py-2.5 px-4 rounded transition duration-200 hover:bg-green-400 hover:text-white' activeClassName='text-green-400 visited:text-purple-600 ...'>
                    Accueil
                </NavLink>
                <NavLink exact to='/quiz' className='block py-2.5 px-4 rounded transition duration-200 hover:bg-green-400 hover:text-white' activeClassName='text-green-400 visited:text-purple-600 ...'>
                    Quiz
                </NavLink>
                <NavLink exact to='/visualnovel' className='block py-2.5 px-4 rounded transition duration-200 hover:bg-green-400 hover:text-white' activeClassName='text-green-400 visited:text-purple-600 ...'>
                    Visual Novel
                </NavLink>
            </nav>
        </div>
    )
}