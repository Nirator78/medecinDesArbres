import React from "react";
import { useStyles } from "../utils/style.js";

function GreenButton({ title, handleClick }) {
    const style = useStyles();
    return (
        <button
            onClick={handleClick}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" style={style._defaultBgColor}
        >
            {title}
        </button>
        
    )
}

export default GreenButton;
