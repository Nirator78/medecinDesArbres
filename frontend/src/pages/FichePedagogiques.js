import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom"
import { Paper, Typography, Grid, CardActions, CardContent, CardMedia, Card } from '@mui/material';
import GreenButton from '../component/GreenButton';
import FichePedagogiqueService from "../services/fiche-pedagogique.service";

export default function FichePedagogiques(props) {
    const [fichePedagogiqueList, setFichePedagogiqueList] = useState([]);
    const navigate = useNavigate();

    useEffect(async () => {
        const response = await FichePedagogiqueService.getAllFichePedagogiques();
        setFichePedagogiqueList(response);
    }, [])

    return (
        <>
            <Paper  sx={{ p: 4, mt: 5, ml: 4, mr: 4, mb: 2, borderRadius: 2}}>
                <Typography sx={{mb: 4}} align="center" variant="h4" gutterBottom component="div">
                    Informez vous grâce à nos supers fiches pédagogiques, adaptées a tous !
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3, pl: 2}} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {fichePedagogiqueList.map((fiche, index) => {
                        return (
                            <Grid item xs={4} key={index}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="140"
                                        image="https://picsum.photos/100/50"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                        {fiche.titre} 
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        {fiche.theme} 
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <GreenButton title="Voir" handleClick={() => navigate(`/app/fiche-pedagogique/${fiche.id}`)} />
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </Paper>
        </>
    )
}
