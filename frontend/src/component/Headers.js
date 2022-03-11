import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';

const links = [
    { name: "Accueil", link: "/app" },
    { name: "Parcours Ecolo", link: "/app/parcoursecolo" },
    { name: "Quiz", link: "/app/quiz" },
    { name: "Boutique", link: "/app/quiz" },
];

export default function Headers() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    {
                        links.map((link) => {
                            return (
                                <RouterLink to={link.link}>
                                    {link.name}
                                </RouterLink>
                            )
                        })
                    }
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}