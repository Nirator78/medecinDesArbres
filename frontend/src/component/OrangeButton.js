import React from "react";
import { Button } from '@mui/material';
import { useStyles } from "../utils/style.js";

function OrangeButton({ title, handleClick }) {
    const style = useStyles();
    return (
        <Button
            onClick={handleClick}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            sx={style.buttonDanger}
        >
            {title}
        </Button>

    )
}

export default OrangeButton;
