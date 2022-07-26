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
            <Paper sx={{ p: 4, mt: 5, ml: 4, mr: 4, mb: 2, borderRadius: 2 }}>
                <Typography sx={{ p: 2, mt: 2, ml: 2, mr: 2 }} variant="h4" align="center" gutterBottom component="div">
                    Informez vous grâce à nos supers fiches pédagogiques, adaptées a tous !
                </Typography>
                <Typography variant="h4" align="center" color={style._defaultColor}> {fichePedagogique?.titre}</Typography>
                <Typography variant="h5" align="center" color={'gray'}> {fichePedagogique?.theme}</Typography>

                {
                    fichePedagogique && fichePedagogique.sousPartieFichePedagogiques.map((obj, idx) => {
                        return (
                            <Paper sx={{ p: 4, mt: 5, ml: 4, mr: 4, mb: 2, borderRadius: 2 }} key={idx}>
                                <Typography variant="h6">
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
