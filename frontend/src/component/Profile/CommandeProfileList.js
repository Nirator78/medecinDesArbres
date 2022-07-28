import { Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ArticleService from '../../services/article.service';
import AuthService from '../../services/auth.service';
import Command from './Command';

export default function CommandeProfileList() {
    const [commands, setCommands] = useState([])
    const user = AuthService.getUser();

    useEffect(() => {
        async function fetchData() {
            const response = await ArticleService.getCommand(user.id);
            setCommands(response);
        }
        fetchData();
    }, [user.id])

    return (
        <>
            <Typography align="center" variant="h5" gutterBottom component="div">
                Mes commandes
            </Typography>
            {
                commands.map((command, index) => {
                    return (
                        <Command data={command} key={index} />
                    )
                })
            }
            {
                !commands.length &&
                <Typography variant="body2" align='center' color="text.secondary" pb={2}>
                    Vous n'avez pas encore effectué de commande
                </Typography>
            }
        </>
    )
}
