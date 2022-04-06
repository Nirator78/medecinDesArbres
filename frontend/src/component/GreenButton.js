import React from "react";

function GreenButton({ title, handleClick }) {
    return (
        <button
            onClick={handleClick}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" style={{backgroundColor: '#3e993f' }}
        >
            {title}
        </button>
        
    )
}

export default GreenButton;
