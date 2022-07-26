import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import { Paper, Typography, Grid } from '@mui/material';
import { GreenButton } from '../../component';
import FichePedagogiqueService from "../../services/fiche-pedagogique.service";
import { useStyles } from "../../utils/style.ts";

export default function FichePedagogiques(props) {
    const [fichePedagogiqueList, setFichePedagogiqueList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const response = await FichePedagogiqueService.getAllFichePedagogiques();
            setFichePedagogiqueList(response);
        }
        fetchData();
    }, [])

    const style = useStyles();

    return (
        <Paper elevation={style.containerPaper.elevation} sx={style.containerPaper.sx}>
            <Typography variant="h6">
                Fiches pédagogiques
            </Typography>
            <Typography>
                Informez vous grâce à nos supers fiches pédagogiques, adaptées a tous !
            </Typography>
            <Grid container spacing={2}>
                {fichePedagogiqueList.map((fiche, index) => {
                    return (
                        <Grid item xs={4} key={index}>
                            <GreenButton title={fiche.titre} handleClick={() => navigate(`/app/fiche-pedagogique/${fiche.id}`)} />
                        </Grid>
                    )
                })}
            </Grid>
        </Paper>
    )
}
