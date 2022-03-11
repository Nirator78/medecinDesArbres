import React from "react";
import Box from "@mui/material/Box"
import { Typography } from "@mui/material";

function CardList({ title, data }) {
    return (
        <Box sx={{ p: 2, border: 1, borderColor: "green", borderRadius: 4 }}>
            <Typography variant="h6">
                {title}
            </Typography>
        </Box>
    )
}

export default CardList;
