import React, { useEffect, useState } from 'react';
import { Paper, Grid } from '@mui/material';
import CardBoutique from '../component/CardBoutique';
import ArticleService from '../services/article.service';

export default function Boutique(props) {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await ArticleService.getArticles();
            setArticles(response);
        }
        fetchData();
    }, [])

    return (
        <>
            <Paper>
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
                </Grid>
            </Paper>
        </>
    )
}
