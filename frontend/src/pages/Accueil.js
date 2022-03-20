import React from 'react';
import { Paper, Typography, Grid } from '@mui/material';
import Operation from './subAccueil/Operation';
import FichePedagogiques from './subAccueil/FichePedagogiques';
import Quiz from './subAccueil/Quiz';
import Boutique from './subAccueil/Boutique';

export default function Accueil(props) {
    return (
        <>
            <Paper elevation={3} sx={{ p: 4, mt: 5, ml: 4, mr: 4, mb: 2, borderRadius: 7 }}>
                <Grid container>
                    <Grid item xs={10}>
                        <Typography variant="h5" sx={{ mb: 2 }}>
                            Médecins des arbres
                        </Typography>
                        <Typography variant="h4">
                            Rejoignez le mouvement, faites plus pour l'environnement
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <img
                            src="logo.png"
                            alt="logo"
                            width="300"
                        />
                    </Grid>
                </Grid>
            </Paper>
            <Operation />
            <FichePedagogiques />
            <Quiz />
            <Boutique />
        </>
    )
}
