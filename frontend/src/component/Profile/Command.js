import React from 'react';
import { Box, Typography, Grid } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Command({ data }) {
    let total = 0;

    data.commandeLignes.forEach(article => {
        total += article.quantite * article.article.prix
    });

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="command"
                id="command"
            >
                <Grid container>
                    <Grid item xs={2}>
                        <Typography>
                            {data.numero}
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography>
                            {data.date}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}></Grid>
                    <Grid item xs={2}>
                        <Typography>
                            {total}€
                        </Typography>
                    </Grid>
                </Grid>
            </AccordionSummary>
            <AccordionDetails>
                {
                    data.commandeLignes.map((panier, index) => {
                        return (
                            <Box sx={{ p: 2, border: 1, borderColor: "green", borderRadius: 4 }} key={index}>
                                <Grid container>
                                    <Grid item xs={2}>
                                        <Typography variant="h6">
                                            {panier.article.nom}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography variant="h6">
                                            {panier.article.prix}€
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography variant="h6">
                                            {panier.quantite}x
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={5}>
                                    </Grid>
                                    <Grid item xs={1}>
                                        <Typography variant="h6">
                                            {panier.article.prix * panier.quantite}€
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        )
                    })
                }
            </AccordionDetails>
        </Accordion>
    )
}