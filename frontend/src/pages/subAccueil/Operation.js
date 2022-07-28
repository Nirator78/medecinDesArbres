import React from 'react';
import { Paper, Typography, Grid } from '@mui/material';
import { CardList } from '../../component';
import { useStyles } from "../../utils/style.js";

export default function Operation(props) {
    const style = useStyles();
    return (
        <Paper elevation={style.containerPaper.elevation} sx={style.containerPaper.sx}>
            <Typography variant="h6" sx={{ pb: 2 }}>
                Opération "Soignons les arbres"
            </Typography>
            <Typography sx={{ pb: 3 }}>
                Ramassez les déchets lors de vos parcours quotidiens et partagez vos efforts avec la communauté !
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <CardList title="Derniers nettoyages" data={[]} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <CardList title="Meilleurs nettoyeurs" data={[]} />
                </Grid>
            </Grid>
        </Paper>
    )
}
