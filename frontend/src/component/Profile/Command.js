import React from 'react';
import { Box, Typography, Grid } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import moment from 'moment'

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
                    <Grid item xs={3}>
                        <Typography>
                            Numéro de commande : {data.numero}
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography>
                        {moment(data.date).format('DD/MM/yyyy à HH:mm:ss')}
                        </Typography>
                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={2}>
                        <Typography>
                            Nombre d'article : {data.commandeLignes.length}
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography>
                            Total : {total}€
                        </Typography>
                    </Grid>
                </Grid>
            </AccordionSummary>
            <AccordionDetails>
                <Box sx={{ p: 2, borderRadius: 4}}>
                    <Grid container sx={{borderBottom: 1, borderColor: "#3e993f", mb: 2 }}>
                        <Grid item xs={2}>
                            <Typography style={{ fontWeight: 600 }}>
                                Nom
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography style={{ fontWeight: 600 }}>
                                Prix
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography style={{ fontWeight: 600 }}>
                                Quantité
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography style={{ fontWeight: 600 }}>
                                Prix total article
                            </Typography>
                        </Grid>
                    </Grid>
              
                    {
                        data.commandeLignes.map((panier, index) => {
                            return (
                            
                                    <Grid container sx={{ mb: 2 }}>
                                        <Grid item xs={2}>
                                            <Typography style={{ fontWeight: 600 }}>
                                                {panier.article.nom}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Typography style={{ fontWeight: 600 }}>
                                                {panier.article.prix}€
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Typography style={{ fontWeight: 600 }}>
                                                {panier.quantite}x
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={5}>
                                        </Grid>
                                        <Grid item xs={1}>
                                            <Typography style={{ fontWeight: 600 }}>
                                                {panier.article.prix * panier.quantite}€
                                            </Typography>
                                        </Grid>
                                    </Grid>
                            )
                        })
                    }
                    <Grid container sx={{borderTop: 1, borderColor: "#3e993f", pt: 2}}>
                        <Grid item xs={2}>
                            <Typography style={{ fontWeight: 600 }}>
                                Total
                            </Typography>
                        </Grid>
                        <Grid item xs={9}>
                        </Grid>
                        <Grid item xs={1}>
                            <Typography style={{ fontWeight: 600 }}>
                            {total}€
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </AccordionDetails>
        </Accordion>
    )
}