import React, { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import "../css/header.css"
import Toolbar from '@mui/material/Toolbar';
import { Link as RouterLink, NavLink } from 'react-router-dom';
import Connexion from "./Auth/Connexion";
import Inscription from "./Auth/Inscription";
import Profile from "./Auth/Profile";
import AuthService from "../services/auth.service"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, Button, Container, IconButton } from "@mui/material";
import ArticleService from "../services/article.service";

const links = [
    { name: "Accueil", link: "/app" },
    { name: "Fiche Pédagogique", link: "/app/fiche-pedagogique" },
    { name: "Parcours Ecolo", link: "/app/parcours-ecolo" },
    { name: "Quiz", link: "/app/quiz" },
    { name: "Boutique", link: "/app/boutique" },
    { name: "Conférence", link: "/app/conference" }
];

export default function Headers() {
    const [panierTaille, setPanierTaille] = useState(0);
    const user = AuthService.getUser();

    useEffect(() => {
        async function fetchData() {
            const response = await ArticleService.getPanier(user.id);
            setPanierTaille(response.length ? response.length : 0);
        }
        fetchData();
    }, [user.id])


    return (
        <AppBar position="static" style={{ background: '#FFFFFF' }} >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
                        {
                            // important for mapping
                            links.map((link, index) => {
                                return (
                                    <Button style={{ color: '#4caf50' }} item key={index}>
                                        <NavLink className={({ isActive }) => (isActive ? 'activer' : 'inactive')} to={link.link}>
                                            {link.name}
                                        </NavLink>
                                    </Button>
                                )
                            })
                        }
                    </Box>
                    {!user && (
                        <>
                            <Connexion />
                            <Inscription />
                        </>
                    )}
                    {user && (
                        <>
                            <RouterLink to="/app/panier">
                                <IconButton aria-label="cart">
                                    <Badge badgeContent={panierTaille} color="secondary">
                                        <ShoppingCartIcon style={{ color: '#4caf50' }} />
                                    </Badge>
                                </IconButton>
                            </RouterLink>
                            <Profile user={user} />
                        </>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
}