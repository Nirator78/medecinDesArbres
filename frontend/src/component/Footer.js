import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const footers = [
    {
      title: 'Entreprise',
      description: ['Equipe', 'Histoire', 'Nous contacter', 'Localisation'],
    },
    {
      title: 'Caractéristiques',
      description: [
        'Fiche pédagogique',
        'Parcours écolo',
        'Quiz',
        'Boutique',
        'Conférence',
      ],
    },
    {
      title: 'Nous aider',
      description: ['Faire un don'],
    },
    {
      title: 'Légale',
      description: ['Conditions d\'utilisation', 'Politique de confidentialité'],
    },
  ];
export default function Footer(props) {
    return (
    <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <NavLink to="#" >
                      {item}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
      </Container>

    )
} 