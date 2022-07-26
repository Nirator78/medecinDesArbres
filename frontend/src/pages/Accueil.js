import React from 'react';
import { Paper, Typography, Grid } from '@mui/material';
import { Boutique, FichePedagogiques, Operation, Quiz } from './subAccueil';
import { useStyles } from "../utils/style.ts";

export default function Accueil(props) {
    const style = useStyles();
    return (
        <>
            <Paper elevation={style.containerPaperTop.elevation} sx={style.containerPaperTop.sx}>
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
