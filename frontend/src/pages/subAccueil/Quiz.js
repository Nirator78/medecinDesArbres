import React from 'react';
import { useNavigate } from "react-router-dom"
import { Paper, Typography, Grid } from '@mui/material';
import GreenButton from '../../component/GreenButton';

export default function Quiz(props) {
    const navigate = useNavigate();
    return (
        <Paper elevation={3} sx={{ p: 4, ml: 4, mr: 4, mb: 2, borderRadius: 7 }}>
            <Typography variant="h6">
                Quiz
            </Typography>
            <Typography>
                Evaluez vos connaissances et devenez un médecin des arbres vous aussi !
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <GreenButton title="Quizz pour les 3-5 ans" handleClick={() => navigate('/app/quiz')} />
                </Grid>
                <Grid item xs={4}>
                    <GreenButton title="Quizz pour les 6-10 ans" handleClick={() => navigate('/app/quiz')} />
                </Grid>
                <Grid item xs={4}>
                    <GreenButton title="Quizz pour les plus grands" handleClick={() => navigate('/app/quiz')} />
                </Grid>
            </Grid>
        </Paper>
    )
}
