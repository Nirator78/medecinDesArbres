import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom"
import { Paper, Typography, Grid } from '@mui/material';
import GreenButton from '../../component/GreenButton';
import FichePedagogiqueService from "../../services/fiche-pedagogique.service";

export default function FichePedagogiques(props) {
    const [fichePedagogiqueList, setFichePedagogiqueList] = useState([]);
    const navigate = useNavigate();

    useEffect(async () => {
        const response = await FichePedagogiqueService.getAllFichePedagogiques();
        setFichePedagogiqueList(response);
    }, [])

    return (
        <Paper elevation={3} sx={{ p: 4, ml: 4, mr: 4, mb: 2, borderRadius: 7 }}>
            <Typography variant="h6">
                Fiche pédagogiques
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
