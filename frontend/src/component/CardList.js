import React from "react";
import Box from "@mui/material/Box"
import { Avatar, Grid, Typography } from "@mui/material";
import { useStyles } from "../utils/style.js";

function CardList({ title, data }) {
    const style = useStyles();
    return (

        <Box sx={style.boxBordered}>
            <Typography variant="h6" pb={1}>
                {title}
            </Typography>
            {
                data.map((item, index) => {
                    const userName = item.user.split(" ");
                    return (
                        <Grid  key={index} pb={1} container spacing={{ xs: 1, md: 3, pl: 3 }} columns={{ xs: 12, md: 12 }}>
                            <Grid item sm={2} sx={{ display: { xs: 'none', md: 'flex' } }}>
                                <Avatar /*sx={{ width: 32, height: 32 }}*/ sx={style._defaultBgColor}>{userName[1].substr(0, 1)}{userName[0].substr(0, 1)}</Avatar>
                            </Grid>
                            <Grid item xs={7} sm={7}>
                                {item.user} 
                            </Grid>
                            <Grid item xs={4} sm={3}>
                                {item.nbSac} sacs
                            </Grid>
                        </Grid>
                    )
                })
            }
        </Box>
    )
}

export default CardList;
