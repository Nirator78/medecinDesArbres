import React from 'react';
import Footer from '../Footer';
import Headers from './Headers';
import NavVertical from './NavVertical';

export default function Cors ({children}) {
    return (
        <>
            <Headers/>
            <div className="relative min-h-screen md:flex">
                <NavVertical/>
                <div className="flex-1 bg-gray-50">
                    {children}              
                </div>
                
            </div>
        </>
    )
}