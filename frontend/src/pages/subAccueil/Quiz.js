import React from 'react';
import { useNavigate } from "react-router-dom"
import { Paper, Typography, Grid } from '@mui/material';
import { GreenButton } from '../../component';
import { useStyles } from "../../utils/style.js";

export default function Quiz(props) {
    const navigate = useNavigate();
    const style = useStyles();
    return (
        <Paper elevation={style.containerPaper.elevation} sx={style.containerPaper.sx}>
            <Typography variant="h6">
                Quiz
            </Typography>
            <Typography>
                Évaluez vos connaissances et devenez un médecin des arbres vous aussi !
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <GreenButton title="Quizz pour les 3-5 ans" handleClick={() => navigate('/quiz')} />
                </Grid>
                <Grid item xs={4}>
                    <GreenButton title="Quizz pour les 6-10 ans" handleClick={() => navigate('/quiz')} />
                </Grid>
                <Grid item xs={4}>
                    <GreenButton title="Quizz pour les plus grands" handleClick={() => navigate('/quiz')} />
                </Grid>
            </Grid>
        </Paper>
    )
}
