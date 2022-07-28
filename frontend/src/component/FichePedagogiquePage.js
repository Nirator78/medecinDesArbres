import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import { Paper, Typography } from '@mui/material';
import FichePedagogiqueService from "../services/fiche-pedagogique.service";
import { useStyles } from "../utils/style.js";

export default function FichePedagogiquePage(props) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [fichePedagogique, setFichePedagogique] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const response = await FichePedagogiqueService.getOneFichePedagogique(id);
            if (response.status) {
                setFichePedagogique(response.data[0]);
            } else {
                navigate('/fiche-pedagogique')
            }
        }
        fetchData();
    }, [id])
    const style = useStyles();

    return (
        <>
            <Paper sx={style.containerPaperPage.sx}>
                <Typography sx={{ mb: 4 }} align="center" variant="h4" gutterBottom component="div">
                    Informez vous grâce à nos supers fiches pédagogiques, adaptées a tous !
                </Typography>
                <Typography variant="h4" align="center" color={style._defaultColor}> {fichePedagogique?.titre}</Typography>
                <Typography variant="h5" align="center" color={'gray'}> {fichePedagogique?.theme}</Typography>

                {
                    fichePedagogique && fichePedagogique.sousPartieFichePedagogiques.map((obj, idx) => {
                        return (
                            <Paper elevation={0} sx={style.containerPaperBloc.sx} key={idx}>
                                <Typography variant="h6" sx={{ pb: 2 }}>
                                    {obj?.titre}
                                </Typography>
                                <Typography>
                                    {obj?.contenue}
                                </Typography>
                            </Paper>
                        )
                    })
                }
            </Paper>
        </>
    )
}
