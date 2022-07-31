import React, { useEffect, useState } from 'react';
import { Paper, Typography, Grid, Button } from '@mui/material';
import { CardList } from '../../component';
import { useStyles } from "../../utils/style.js";
import { ParcoursEcoloService } from '../../services';
import { useNavigate } from 'react-router-dom';

export default function Operation(props) {
    const [statistiques, setStatistiques] = useState([]);
    const [statistiquesTopFive, setStatistiquesTopFive] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const response = await ParcoursEcoloService.getStatistiqueParcoursEcolo();
            setStatistiques(response);
        }
        fetchData();
    }, [])

    useEffect(() => {
        async function fetchData() {
            const response = await ParcoursEcoloService.getStatistiqueParcoursEcoloTopFive();
            setStatistiquesTopFive(response);
        }
        fetchData();
    }, [])

    const handleClick = () => {
        navigate("/parcours-ecolo");
    }

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
                    <CardList title="Derniers nettoyages" data={statistiques} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <CardList title="Meilleurs nettoyeurs" data={statistiquesTopFive} />
                </Grid>
            </Grid>
        </Paper>
    )
}
