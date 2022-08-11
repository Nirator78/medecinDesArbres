import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import ArticleService from '../services/article.service';
import AuthService from '../services/auth.service';
import { Paper, Typography, Box, Grid, CardContent, CardMedia, Card, ButtonGroup, Button } from '@mui/material';
import { GreenButton } from '../component';
import { useStyles } from "../utils/style.js";
import DeleteIcon from '@mui/icons-material/Delete';
import {baseURLImage} from '../utils/axios';

export default function Panier(props) {
    const [paniers, setPaniers] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalArticle, setTotalArticle] = useState(0);
    let user = AuthService.getUser()
    const navigate = useNavigate();

    const fetchData = async () => {
        if (user) {
            const response = await ArticleService.getPanier(user.id);
            setTotal(0);
            setTotalArticle(0);
            setPaniers(response);
        }
        else {
            navigate("/");
        }
    }
    
    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        panierCalcul();
    }, [paniers])

    const handleCommande = () => {
        async function postData() {
            await ArticleService.postCommand(user.id);
        }
        postData();
        navigate("/profile");
    }

    const handleBoutique = () => {
        navigate("/boutique");
    }

    const handleRemoveArticle = (panier) => {
        const panierId = panier.id;
        panier.quantite = panier.quantite - 1;
        if(panier.quantite === 0) {
            handleDeleteArticle(panierId);
        }
        delete panier.id;
        async function putData() {
            await ArticleService.putPanier(panierId, panier );
            fetchData();
        }
        putData();
    }

    const handleAddArticle = (panier) => {
        const panierId = panier.id;
        panier.quantite = panier.quantite + 1;
        delete panier.id;
        async function putData() {
            await ArticleService.putPanier(panierId, panier );
            fetchData();
        }
        putData();
    }

    const handleDeleteArticle = (panierId) => {
        ArticleService.deletePanier(panierId);
        setTimeout(
            () => {
                fetchData()
            },
            500
        );
    }



    const style = useStyles();
    
    const panierCalcul = () => {
        paniers.forEach((panier) => {
            setTotal((old)=> old + panier.article.prix * panier.quantite);
        })
    
        paniers.forEach((panier) => {
            setTotalArticle((old)=> old + panier.quantite);
        })
    }

    return (
        <>
            <Paper sx={style.containerPaperPage.sx}>
                <Typography align="center" variant="h4" gutterBottom component="div">
                    Votre panier
                </Typography>
                {
                    paniers.map((panier, index) => {
                        return (
                            <Card key={index} sx={{ display: 'flex' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', paddingRight: 2 }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography component="div" variant="h5">
                                            {panier.article.nom}
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" component="div">
                                            {panier.article.prix + "€"}
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" component="div">
                                            <Grid item xs={12}>
                                                <ButtonGroup variant="contained" color="success" aria-label="button group" style={{ marginright: 2 }}>
                                                    <Button onClick={() => handleRemoveArticle(panier)} >{"-"}</Button>
                                                    <Button>{panier.quantite}</Button>
                                                    <Button onClick={() => handleAddArticle(panier)}>{"+"}</Button>
                                                </ButtonGroup>
                                            </Grid>
                                            <Grid item xs={12} pt={2} >
                                                <Button sx={style.buttonDanger} variant="contained" 
                                                    onClick={() => {
                                                        handleDeleteArticle(panier.id)
                                                    }}
                                                >
                                                    <DeleteIcon></DeleteIcon>
                                                </Button>
                                            </Grid>
                                        </Typography>
                               
                                    </CardContent>
                                </Box>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 151 }}
                                    image={baseURLImage + panier.article?.image?.url}
                                    alt="Live from space album cover"
                                />
                            </Card>
                        )
                    })
                }
                {
                    paniers.length > 0 &&
                    <>
                        <Grid container mt={2} mb={2}>
                            <Grid item xs={11}>
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
                    </>
                }
                {
                    !paniers.length &&
                    <>
                        <Grid container mt={2} mb={2}>
                            <Typography variant="h6">
                                Votre panier est vide
                            </Typography>
                        </Grid>
                        <GreenButton title="Ajouter un article au panier" handleClick={handleBoutique} />
                    </>
                }
            </Paper>
        </>
    )
}
