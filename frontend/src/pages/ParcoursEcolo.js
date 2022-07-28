import React, { useEffect, useState } from 'react';
import { Paper, Typography, Grid, Modal, Button, Card, CardHeader, Avatar, CardMedia, CardContent, CardActions, Dialog, DialogContent, DialogTitle, styled } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { AuthService, ParcoursEcoloService } from "../services";
import { FormParcoursEcolo } from "../component";
import { useStyles } from "../utils/style.js";
import { baseURLImage } from '../utils/axios';

const CustomPaper = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        p: 4,
        margin: 0,
        marginTop: 40,
    },
    [theme.breakpoints.up('sm')]: {
        p: 4,
        mt: 5,
        ml: 4,
        mr: 4,
        marginBottom: 0,
        borderRadius: 2,
        boxShadow: "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
    }
}));

export default function ParcoursEcolo(props) {
    const [parcoursEcoloList, setParcoursEcoloList] = useState([]);
    const [open, setOpen] = useState(false);
    const [refresh, setRefresh] = useState(false);

    const connectedUser = AuthService.getUser();

    useEffect(() => {
        async function fetchData() {
            const response = await ParcoursEcoloService.getAllParcoursEcolos();
            setParcoursEcoloList(response);
            setRefresh(false);
        }
        fetchData();
    }, [refresh])

    /*const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);*/
    const handleOpen = () => {
        setOpen(true);
      };

      const handleClose = () => {
        setOpen(false);
      };


    const handleRefresh = () => setRefresh(true);
    const style = useStyles();

    return (
        <>
            <CustomPaper sx={style.containerPaperPage.sx}>
                <Typography align="center" variant="h4" gutterBottom component="div" sx={{ mb: 4 }} >
                    Liste des parcours écolos de nos utilisateurs
                </Typography>

                {
                    AuthService.isLogin() ?
                        <div style={{textAlign: 'center'}}>
                            <Button variant="contained" sx={style.buttonMb} onClick={handleOpen}>Partager son parcours écolo</Button>
                            <Dialog open={open} onClose={handleClose}>
                                <DialogTitle>
                                        Partagez votre parcours écolo !
                                </DialogTitle>
                                <DialogContent>
                                    <FormParcoursEcolo handleClose={handleClose} handleRefresh={handleRefresh}></FormParcoursEcolo>
                                </DialogContent>
                            </Dialog>
                        </div>
                        : <></>
                }
                <Grid container spacing={{ xs: 2, md: 3, pl: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {parcoursEcoloList.map((parcoursEcolo, index) => {
                        return (
                            <Grid item xs={4} key={index}>
                                <Card/* sx={{ maxWidth: 345 }}*/>
                                    <CardHeader
                                        avatar={
                                            <Avatar aria-label="recipe" sx={style._defaultBgColor}>
                                                {parcoursEcolo.user.prenom.substr(0, 1)}{parcoursEcolo.user.nom.substr(0, 1)}
                                            </Avatar>
                                        }
                                        title={parcoursEcolo.user.prenom + " " + parcoursEcolo.user.nom}
                                        subheader={parcoursEcolo.ville.ville} style={{textTransform: 'capitalize'}}
                                    />

                                    <CardMedia
                                        component="img"
                                        height="194"
                                        style={{
                                            maxWidth: 500,
                                            maxHeight: 180,
                                        }}
                                        image={baseURLImage + parcoursEcolo?.image?.url}
                                        alt={parcoursEcolo.description}
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary" sx={{ pb: 2 }}>
                                            Nombre de sac ramassés: {parcoursEcolo.nbSac}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {parcoursEcolo.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{ pb: 2, px: 2, justifyContent: 'right' }}>
                                        {
                                            connectedUser?.id === parcoursEcolo.user.id ?
                                                <Button sx={style.buttonDanger} variant="contained" onClick={() => {
                                                    ParcoursEcoloService.deleteParcoursEcolo(parcoursEcolo.id);
                                                    setTimeout(
                                                        () => {
                                                            handleRefresh()
                                                        },
                                                        500
                                                    );
                                                }}><DeleteIcon></DeleteIcon></Button> :
                                                null
                                        }
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </CustomPaper>
        </>
    )
}
