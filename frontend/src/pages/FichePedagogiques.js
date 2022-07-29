import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import { Paper, Typography, Grid, CardActions, CardContent, CardMedia, Card, styled } from '@mui/material';
import { GreenButton } from '../component';
import FichePedagogiqueService from "../services/fiche-pedagogique.service";
import { useStyles } from "../utils/style.js";

const CustomPaper = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        p: 4,
        margin: 0,
        marginTop: 40,
    },
    [theme.breakpoints.up('sm')]: {
        p: 4,
        mt: 5,
        ml: 4,
        mr: 4,
        marginBottom: 0,
        borderRadius: 2,
        boxShadow: "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
    }
}));

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
        <>
            <CustomPaper sx={style.containerPaperPage.sx}>
                <Typography sx={{ mb: 4 }} align="center" variant="h4" gutterBottom component="div">
                    Informez vous grâce à nos supers fiches pédagogiques, adaptées a tous !
                </Typography>
                <Typography align="center" variant="body1" component="div" sx={{ mb: 4 }}>
                    Ajouter un petit text explicatif...
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3, pl: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {fichePedagogiqueList.map((fiche, index) => {
                        return (
                            <Grid item xs={4} key={index}>
                                <Card /*sx={{ maxWidth: 345 }}*/>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {fiche.titre}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {fiche.theme}
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{ pb: 2, px: 2 }}>
                                        <GreenButton title="Voir" handleClick={() => navigate(`/fiche-pedagogique/${fiche.id}`)} />
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </CustomPaper>
        </>
    )
}
