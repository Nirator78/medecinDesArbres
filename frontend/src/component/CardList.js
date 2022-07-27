import React from "react";
import Box from "@mui/material/Box"
import { Typography } from "@mui/material";
import { useStyles } from "../utils/style.js";

function CardList({ title, data }) {
    const style = useStyles();
    return (

        <Box sx={style.boxBordered}>
            <Typography variant="h6">
                {title}
            </Typography>
        </Box>
    )
}

export default CardList;
