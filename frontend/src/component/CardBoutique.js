import React from "react";
import Box from "@mui/material/Box"
import { Typography } from "@mui/material";

function CardBoutique({ data }) {
    return (
        <Box sx={{ p: 2, border: 1, borderColor: "green", borderRadius: 4 }}>
            <Typography variant="h6">
                {data.name}
            </Typography>
            <img
                src={data.img}
                alt={data.name}
                width="200"
            />
        </Box>
    )
}

export default CardBoutique;