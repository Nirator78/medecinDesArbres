import React, { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import "../css/header.css";
import Toolbar from '@mui/material/Toolbar';
import { Link as RouterLink, NavLink } from 'react-router-dom';
import Connexion from "./Auth/Connexion";
import Inscription from "./Auth/Inscription";
import Profile from "./Auth/Profile";
import AuthService from "../services/auth.service"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, Button, Container, IconButton, Menu, MenuItem } from "@mui/material";
import ArticleService from "../services/article.service";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { useStyles } from "../utils/style.js";

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
            if(user){
                const response = await ArticleService.getPanier(user.id);
                setPanierTaille(response.length ? response.length : 0);
            }
        }
        fetchData();
    }, [])

    const [anchorElNav, setAnchorElNav] = React.useState(null);

  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
    const style = useStyles();

    return (
        <AppBar position="static" style={{ background: '#FFF' }} >
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                    >
                    <DensityMediumIcon sx={style._defaultColor}/>
                    </IconButton>
                    <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                    >
                        {
                            // important for mapping
                            links.map((link, index) => {
                                return (
                                    <MenuItem style={style._defaultColor} item key={index} onClick={handleCloseNavMenu}>
                                        <NavLink className={({ isActive }) => (isActive ? 'activer' : 'inactive')} to={link.link}>
                                            {link.name}
                                        </NavLink>
                                    </MenuItem>
                                )
                            })
                        }
                    </Menu>
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {
                        // important for mapping
                        links.map((link, index) => {
                            return (
                                <Button style={style._defaultColor} item key={index}>
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
                                        <ShoppingCartIcon style={style._defaultColor} />
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