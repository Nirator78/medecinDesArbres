import React from "react";

function GreenButton({ title, handleClick }) {
    return (
        <button
            onClick={handleClick}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
            {title}
        </button>
    )
}

export default GreenButton;