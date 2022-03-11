import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import { Link as RouterLink } from 'react-router-dom';
import Connexion from "./Auth/Connexion";
import Inscription from "./Auth/Inscription";
import Profile from "./Auth/Profile";
import AuthService from "../services/auth.service"

const links = [
    { name: "Accueil", link: "/app" },
    { name: "Parcours Ecolo", link: "/app/parcoursecolo" },
    { name: "Quiz", link: "/app/quiz" },
    { name: "Boutique", link: "/app/boutique" },
];

export default function Headers() {
    const user = AuthService.getUser();

    return (
        <Box sx={{ flexGrow: 1, justifyContent: 'space-around' }}>
            <AppBar position="static" color="inherit">
                <Toolbar>
                    <Grid container>
                        {
                            // important for mapping
                            links.map((link, index) => {
                                return (
                                    <Grid item xs={1}>
                                        <RouterLink to={link.link} key={index}>
                                            {link.name}
                                        </RouterLink>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                    {!user && (
                        <>
                            <Connexion />
                            <Inscription />
                        </>
                    )}
                    {!user && (
                        <>
                            <Profile user={user} />
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}