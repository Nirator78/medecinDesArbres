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
            <Paper sx={{ p: 4, mt: 5, ml: 4, mr: 4, mb: 2, borderRadius: 2 }}>
                <Typography align="center" variant="h4" gutterBottom component="div">
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
                        Vous n'avez pas de commandes réalisées
                    </Typography>   
                }
            </Paper>
        </>
    )
}
