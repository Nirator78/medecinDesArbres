import React, { useEffect, useState } from 'react';
import ArticleService from '../services/article.service';
import AuthService from '../services/auth.service';
import { Paper, Typography } from '@mui/material';

export default function Panier(props) {
    const [paniers, setPaniers] = useState([]);

    const user = AuthService.getUser();

    useEffect(() => {
        async function fetchData() {
            const response = await ArticleService.getPanier(user.id);
            setPaniers(response);
        }
        fetchData();
    }, [])

    console.log(paniers)

    return (
        <>
            <Paper>
                <Typography>
                    Panier
                </Typography>
            </Paper>
        </>
    )
}
