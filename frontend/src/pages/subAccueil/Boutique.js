import React, { useEffect, useState } from 'react';
import { Paper, Typography, Grid } from '@mui/material';
import { CardBoutique, GreenButton } from '../../component';
import { useNavigate } from 'react-router-dom';
import ArticleService from '../../services/article.service';
import { useStyles } from "../../utils/style.js";

export default function Boutique(props) {
    const navigate = useNavigate();
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await ArticleService.getArticles(6);
            setArticles(response);
        }
        fetchData();
    }, [])

    const handleClick = () => {
        navigate("/boutique");
    }
    const style = useStyles();

    return (
        <Paper elevation={style.containerPaper.elevation} sx={style.containerPaper.sx}>
            <Typography variant="h6" sx={{ pb: 2 }}>
                La boutique
            </Typography>
            <Typography sx={{ pb: 3 }}>
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
                    <GreenButton title="Accéder à tous nos produits" handleClick={handleClick} />
                </Grid>
            </Grid>
        </Paper>
    )
}
