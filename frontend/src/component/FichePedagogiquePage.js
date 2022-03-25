import { useParams } from "react-router-dom";
import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom"
import { Paper, Typography } from '@mui/material';
import FichePedagogiqueService from "../services/fiche-pedagogique.service";

export default function FichePedagogiquePage(props) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [fichePedagogique, setFichePedagogique] = useState(false);

    useEffect(async () => {
        const response = await FichePedagogiqueService.getOneFichePedagogique(id);
        if(response.status) {
            setFichePedagogique(response.data[0]);
        }else{
            navigate('/app/fiche-pedagogique')
        }
    }, [id])

    return (
        <>
            <Paper>
                <Typography align="center" variant="h4" gutterBottom component="div">
                    Informez vous grâce à nos supers fiches pédagogiques, adaptées a tous !
                </Typography>
                <p> {fichePedagogique?.titre} </p>
                <p> {fichePedagogique?.theme} </p>
                {
                    fichePedagogique && fichePedagogique.sousPartieFichePedagogiques.map((obj, idx) => {
                        return (
                            <div key={idx}>
                                {obj?.titre}
                                {obj?.contenue}
                            </div>
                        )
                    })
                }
            </Paper>
        </>
    )
}
