import React from 'react';
import { Paper, Typography, Grid } from '@mui/material';
import GreenButton from '../../component/GreenButton';

export default function FichePedagogiques(props) {
    const data = [
        { name: "fiche 1" },
        { name: "fiche 2" },
        { name: "fiche 3" },
        { name: "fiche 4" },
        { name: "fiche 5" },
        { name: "fiche 6" },
    ];

    return (
        <Paper elevation={3} sx={{ p: 4, ml: 4, mr: 4, mb: 2, borderRadius: 7 }}>
            <Typography variant="h6">
                Fiche pédagogiques
            </Typography>
            <Typography>
                Informez vous grâce à nos supers fiches pédagogiques, adaptées a tous !
            </Typography>
            <Grid container spacing={2}>
                {data.map((fiche, index) => {
                    return (
                        <Grid item xs={4} key={index}>
                            <GreenButton title={fiche.name} handleClick={() => { console.log(index) }} />
                        </Grid>
                    )
                })}
            </Grid>
        </Paper>
    )
}
