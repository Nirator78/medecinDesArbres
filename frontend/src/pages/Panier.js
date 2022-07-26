import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import ArticleService from '../services/article.service';
import AuthService from '../services/auth.service';
import { Paper, Typography, Box, Grid, CardContent, IconButton, CardMedia, Card, ButtonGroup, Button } from '@mui/material';
import { GreenButton } from '../component';
import { useStyles } from "../utils/style.ts";

export default function Panier(props) {
    const [paniers, setPaniers] = useState([]);
    let total = 0
    let totalArticle = 0
    const navigate = useNavigate();

    const user = AuthService.getUser();

    useEffect(() => {
        async function fetchData() {
            const response = await ArticleService.getPanier(user.id);
            setPaniers(response);
        }
        fetchData();
    }, [user.id])

    const handleCommande = () => {
        async function fetchData() {
            await ArticleService.postCommand(user.id);
        }
        fetchData();
        navigate("/app/profile");
    }
    const style = useStyles();

    paniers.forEach((panier) => {
        total += panier.article.prix * panier.quantite
    })

    paniers.forEach((panier) => {
        totalArticle +=  parseInt(panier.quantite, 10)
    })

    return (
        <>
            <Paper sx={style.containerPaperPage.sx}>
                <Typography align="center" variant="h4" gutterBottom component="div">
                    Votre panier
                </Typography>
                {
                    paniers.map((panier, index) => {
                        return (
                            <Card sx={{ display: 'flex' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography component="div" variant="h5">
                                            {panier.article.nom}
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" component="div">
                                            {panier.article.prix + "€"}
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" component="div">
                                        <Grid item xs={12}>
                                        <ButtonGroup variant="contained" color="success" aria-label="button group" style={{marginright:2}}>
                                            <Button  >{"-"}</Button>
                                            <Button>{panier.quantite}</Button>
                                            <Button >{"+"}</Button>
                                        </ButtonGroup>
                                        </Grid>
                                        </Typography>
                                    </CardContent>
                                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                        <IconButton aria-label="previous">
                            
                                        </IconButton>
                                        <IconButton aria-label="play/pause">
                                
                                        </IconButton>
                                        <IconButton aria-label="next">
                                        
                                        </IconButton>
                                    </Box>
                                </Box>
                                <CardMedia
                                component="img"
                                sx={{ width: 151 }}
                                image={"http://localhost:3000/" + panier.article?.image?.url}
                                alt="Live from space album cover"
                                />
                          </Card>
                        )
                    })
                }
               
                    <Grid container mt={2} mb={2}>
                        <Grid itemx xs={11}>
                            <Typography variant="h6">
                                Sous-Total ({totalArticle} articles)
                            </Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <Typography variant="h6">
                                {total}€
                            </Typography>
                        </Grid>
                    </Grid>

                <GreenButton title="Passer commande" handleClick={handleCommande} />
            </Paper>
        </>
    )
}
