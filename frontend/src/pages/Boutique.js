import React, { useEffect, useState } from 'react';
import { Paper, Grid, Typography, Stack } from '@mui/material';
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

                    <Typography sx={{ mb: 4 }} align="center" variant="h5" gutterBottom component="div">
                        Tout nos produits
                    </Typography>
                   
                    <Grid container spacing={{ xs: 2, md: 3, pl: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
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
           
                <Typography sx={{ mb: 4, mt:2 }} align="center" variant="h7" gutterBottom component="div">

                        <Typography gutterBottom variant="h5" component="div">
                            Qu’est-ce que le zéro déchet ?
                        </Typography>
                        <Typography  component={'span'} variant="body2" color="text.secondary">
                            Le zéro déchet est une démarche écologique qui vise à altérer notre consommation pour supprimer les déchets et diminuer notre impact écologique. Le zéro déchet est associé à la règle des 5 « R ». Cette règle nous vient de l’anglais et créé par Bea Johnson (A zero waste family) et se traduit par : 

                            <Stack
                                direction={{ xs: 'column', md: 'row', pl: 'row' }}
                                justifyContent="center"
                                alignItems="center"
                                spacing={3}
                                paddingTop={2}
                                
                                >
                                <Typography style={{ fontWeight: 600 }} variant="body2" color="text.secondary">
                                    Refuser (Refuse)
                                </Typography>
                                <Typography style={{ fontWeight: 600 }} variant="body2" color="text.secondary">
                                    Réduire (Reduce)
                                </Typography>
                                <Typography style={{ fontWeight: 600 }} variant="body2" color="text.secondary">
                                    Réutiliser (Reuse)
                                </Typography>
                                <Typography style={{ fontWeight: 600 }} variant="body2" color="text.secondary">
                                    Recycler (Recycle)
                                </Typography>
                                <Typography style={{ fontWeight: 600 }} variant="body2" color="text.secondary">
                                    Retourner à la Terre (composter) (Rot)
                                </Typography>
                            </Stack>
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
