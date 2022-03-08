import React from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";

function Interface(props) {
    // add footer and menu here too add it to every pages
    return (
        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh"}}>
            <Outlet />
        </Box>
    )
}

export default Interface;