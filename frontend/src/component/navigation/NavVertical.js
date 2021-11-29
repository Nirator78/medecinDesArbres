import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavVertical () {
    return (
        <div className="flex px-4 py-2 rounded-md text-left">
            <nav>
                <NavLink exact to='/' className='block py-2.5 px-4 rounded transition duration-200 hover:bg-green-500 hover:text-white' activeClassName='text-green-500 visited:text-purple-600 ...'>
                    Accueil
                </NavLink>
                <NavLink exact to='/parcoursecolo' className='block py-2.5 px-4 rounded transition duration-200 hover:bg-green-500 hover:text-white' activeClassName='text-green-500 visited:text-purple-600 ...'>
                    Parcours écolo
                </NavLink>
                <NavLink exact to='/quiz' className='block py-2.5 px-4 rounded transition duration-200 hover:bg-green-500 hover:text-white' activeClassName='text-green-500 visited:text-purple-600 ...'>
                    Quiz
                </NavLink>
                <NavLink exact to='/visualnovel' className='block py-2.5 px-4 rounded transition duration-200 hover:bg-green-500 hover:text-white' activeClassName='text-green-500 visited:text-purple-600 ...'>
                    Visual Novel
                </NavLink>
                <NavLink exact to='/boutique' className='block py-2.5 px-4 rounded transition duration-200 hover:bg-green-500 hover:text-white' activeClassName='text-green-500 visited:text-purple-600 ...'>
                    Boutique
                </NavLink>
            </nav>
        </div>
    )
}