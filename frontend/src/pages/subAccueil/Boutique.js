import React, { useEffect, useState } from 'react';
import { Paper, Typography, Grid } from '@mui/material';
import CardBoutique from '../../component/CardBoutique';
import GreenButton from '../../component/GreenButton';
import { useNavigate } from 'react-router-dom';
import ArticleService from '../../services/article.service';

export default function Boutique(props) {
    const navigate = useNavigate();
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await ArticleService.getArticles();
            setArticles(response);
        }
        fetchData();
    }, [])

    const handleClick = () => {
        navigate("/app/boutique");
    }

    return (
        <Paper elevation={3} sx={{ p: 4, ml: 4, mr: 4, mb: 2, borderRadius: 7 }}>
            <Typography variant="h6">
                La boutique
            </Typography>
            <Typography>
                Nos produits éco-responsables vous seront utiles au quotidien pour contribuer à la protection de l'environnement
            </Typography>
            <Grid container spacing={5} alignItems="center" justifyContent="center">
                {
                    articles.map((item) => {
                        return (
                            <Grid item xs={4} key={item.id}>
                                <CardBoutique data={item} />
                            </Grid>
                        )
                    })
                }
                <Grid item xs={12}>
                    <GreenButton title="Accéder a tous nos produits" handleClick={handleClick} />
                </Grid>
            </Grid>
        </Paper>
    )
}
