import React from 'react';
import { Paper, Typography, Grid } from '@mui/material';
import { CardList } from '../../component';
import { useStyles } from "../../utils/style.ts";

export default function Operation(props) {
    const style = useStyles();
    return (
        <Paper elevation={style.containerPaper.elevation} sx={style.containerPaper.sx}>
            <Typography variant="h6">
                Opération "Soignons les arbres"
            </Typography>
            <Typography>
                Ramassez les déchets lors de vos parcours quotidiens et partagez vos efforts avec la communauté !
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <CardList title="Dernier nettoyages" data={[]} />
                </Grid>
                <Grid item xs={8}>
                    <CardList title="Meilleur nettoyeurs" data={[]} />
                </Grid>
            </Grid>
        </Paper>
    )
}
