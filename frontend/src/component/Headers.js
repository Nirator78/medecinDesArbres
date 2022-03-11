import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
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
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    {
                        // important for mapping
                        links.map((link, index) => {
                            return (
                                <RouterLink to={link.link} key={index}>
                                    {link.name}
                                </RouterLink>
                            )
                        })
                    }
                    {!user && (
                        <>
                            <Connexion />
                            <Inscription />
                        </>
                    )}
                    {user && (
                        <>
                            <Profile />
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}