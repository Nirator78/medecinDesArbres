import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import ArticleService from '../services/article.service';
import AuthService from '../services/auth.service';
import { Paper, Typography, Box, Grid } from '@mui/material';
import GreenButton from '../component/GreenButton';

export default function Panier(props) {
    const [paniers, setPaniers] = useState([]);
    let total = 0
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

    paniers.forEach((panier) => {
        total += panier.article.prix * panier.quantite
    })

    return (
        <>
            <Paper>
                <GreenButton title="Passer commande" handleClick={handleCommande} />
                <Box sx={{ p: 2, border: 1, borderColor: "green", borderRadius: 4 }}>
                    <Grid container>
                        <Grid item xs={2}>
                            <Typography variant="h6">
                                Item name
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="h6">
                                Price
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="h6">
                                Quantity
                            </Typography>
                        </Grid>
                        <Grid item xs={5}>
                        </Grid>
                        <Grid item xs={1}>
                            <Typography variant="h6">
                                Total
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
                {
                    paniers.map((panier, index) => {
                        return (
                            <Box sx={{ p: 2, border: 1, borderColor: "green", borderRadius: 4 }} key={index}>
                                <Grid container>
                                    <Grid item xs={2}>
                                        <Typography variant="h6">
                                            {panier.article.nom}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography variant="h6">
                                            {panier.article.prix}€
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography variant="h6">
                                            {panier.quantite}x
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={5}>
                                    </Grid>
                                    <Grid item xs={1}>
                                        <Typography variant="h6">
                                            {panier.article.prix * panier.quantite}€
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        )
                    })
                }
                <Box sx={{ p: 2, border: 1, borderColor: "green", borderRadius: 4 }}>
                    <Grid container>
                        <Grid item xs={11}>
                            <Typography variant="h6">
                                Total
                            </Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <Typography variant="h6">
                                {total}€
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </>
    )
}
