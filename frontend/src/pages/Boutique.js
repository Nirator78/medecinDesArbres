import React, { useEffect, useState } from 'react';
import { Paper, Grid, Typography, CardContent, List, ListItemText, ListItem } from '@mui/material';
import CardBoutique from '../component/CardBoutique';
import ArticleService from '../services/article.service';

export default function Boutique(props) {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await ArticleService.getArticles();
            setArticles(response);
        }
        fetchData();
    }, [])

    return (
        <>
            <Paper sx={{ p: 4, mt: 5, ml: 4, mr: 4, mb: 2, borderRadius: 2 }}>
                <Typography align="center" variant="h4" gutterBottom component="div">
                    Notre boutique 
                </Typography>
                <Typography sx={{ mb: 4 }} align="center" variant="h7" gutterBottom component="div">
                    Notre boutique en ligne éco-responsable et zéro déchet pour toute la famille, proposant une sélection exclusive de marques eco-engagées, ainsi qu'une multitude de conseils écologiques pour vous aider à opérer une transition douce vers une vie plus verte et moins polluante.
                </Typography>
                <Paper sx={{ p: 4, mt: 5, ml: 4, mr: 4, mb: 2, borderRadius: 2 }}>
                    <Typography sx={{ mb: 4 }} align="center" variant="h5" gutterBottom component="div">
                        Tout nos produits
                    </Typography>
                    <Grid container spacing={5} alignItems="center" justifyContent="center">
                        {
                            articles.map((item) => {
                                return (
                                    <Grid item xs={4} key={item.id}>
                                        <CardBoutique data={item} />
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Paper>
                <Typography sx={{ mb: 4, mt:2 }} align="center" variant="h7" gutterBottom component="div">

                        <Typography gutterBottom variant="h5" component="div">
                            Qu’est-ce que le zéro déchet ?
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Le zéro déchet est une démarche écologique qui vise à altérer notre consommation pour supprimer les déchets et diminuer notre impact écologique. Le zéro déchet est associé à la règle des 5 « R ». Cette règle nous vient de l’anglais et créé par Bea Johnson (A zero waste family) et se traduit par :
                            <List>
                                <ListItem>
                                    <ListItemText  align="center">
                                        Refuser (Refuse)
                                    </ListItemText>
                                    <ListItemText  align="center">
                                        Réduire (Reduce)
                                    </ListItemText>
                                    <ListItemText  align="center">
                                        Réutiliser (Reuse)
                                    </ListItemText>
                                    <ListItemText  align="center">
                                        Recycler (Recycle)
                                    </ListItemText>
                                    <ListItemText  align="center">
                                        Retourner à la Terre (composter) (Rot)
                                    </ListItemText>
                                </ListItem>
                            </List>
                            <Typography  sx={{ mb: 4, mt:2 }} variant="body2" color="text.secondary">
                                Pour être efficace et développer un comportement pro-environnemental, cela demande du temps et de repenser certaines facilités auxquelles nous nous sommes habitués. Le zéro déchet englobe tous les domaines de notre vie : consommation à la maison et à l'extérieur, utilisation des cosmétiques, la façon dont on fait nos courses et on s’habille, on nettoie nos maisons, on cuisine. Pour faire court, c’est réapprendre à vivre autrement et notre boutique zéro déchet et éco-responsable est la pour vous accompagner dans cette transition.
                            </Typography>
                            <Typography  sx={{ mb: 4, mt:2 }} variant="h6" color="text.secondary">
                                Franchir le premier pas vers une démarche zéro déchet avec la boutique éco-responsable en ligne
                            </Typography>                
                    </Typography>
                </Typography>
            </Paper>
        </>
    )
}
