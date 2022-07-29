import React from 'react';
import { Paper, Typography, styled } from '@mui/material';
import { useStyles } from "../utils/style.js";
import GreenButton from '../component/GreenButton.js';
import { useNavigate } from 'react-router-dom';

const CustomPaper = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        p: 4,
        margin: 0,
        marginTop: 40,
    },
    [theme.breakpoints.up('sm')]: {
        p: 4,
        mt: 5,
        ml: 4,
        mr: 4,
        marginBottom: 0,
        borderRadius: 2,
        boxShadow: "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
    }
}));

export default function NotFound(props) {
    const style = useStyles();
    const navigate = useNavigate();
    return (
        <>
            <CustomPaper sx={style.containerPaperPage.sx}>
                <Typography sx={{ mb: 4 }} align="center" variant="h4" gutterBottom component="div">
                    Oh ! N'essayez pas de déraciner un arbre ! 
                </Typography>
                <Typography align="center" variant="body1" component="div" sx={{ mb: 4 }}>
                    Il vous montre le chemin.
                </Typography>
                <GreenButton title="Retrouver le chemin" handleClick={() => navigate(`/`)} />
            </CustomPaper>
        </>
    )
}
