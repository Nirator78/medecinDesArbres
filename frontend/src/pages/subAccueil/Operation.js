import React from 'react';
import { Paper, Typography, Grid } from '@mui/material';
import CardList from '../../component/CardList';

export default function Operation(props) {
    return (
        <Paper elevation={3} sx={{ p: 4, ml: 4, mr: 4, mb: 2, borderRadius: 7 }}>
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