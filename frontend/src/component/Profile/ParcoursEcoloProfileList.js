import React, { useEffect, useState } from 'react';
import { Paper, Typography, Grid, Modal, Button, Card, CardHeader, Avatar, CardMedia, CardContent, CardActions } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ParcoursEcoloService from "../../services/parcours-ecolo.service";
import AuthService from "../../services/auth.service";
import FormParcoursEcolo from '../FormParcoursEcolo';
import { useStyles } from "../../utils/style.js";
import {baseURLImage} from '../../utils/axios';

export default function ParcoursEcoloProfileList() {
    const [parcoursEcoloList, setParcoursEcoloList] = useState([]);
    const [open, setOpen] = useState(false);
    const [refresh, setRefresh] = useState(false);

    const connectedUser = AuthService.getUser();

    useEffect(() => {
        async function fetchData() {
            const response = await ParcoursEcoloService.getParcoursEcoloByUser(connectedUser.id);
            setParcoursEcoloList(response);
            setRefresh(false);
        }
        fetchData();
    }, [refresh, connectedUser.id])


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleRefresh = () => setRefresh(true);
    const style = useStyles();

    return (
        <>
            <Typography align="center" variant="h5" gutterBottom component="div">
                Mes parcours écolos partagés
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3, pl: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {parcoursEcoloList?.length ?
                    parcoursEcoloList?.map((parcoursEcolo, index) => {
                        return (
                            <Grid item xs={4} key={index}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardHeader
                                        avatar={
                                            <Avatar aria-label="recipe" style={style._defaultBgColor}>
                                                {parcoursEcolo.user.prenom.substr(0, 1)}{parcoursEcolo.user.nom.substr(0, 1)}
                                            </Avatar>
                                        }
                                        title={parcoursEcolo.user.prenom + " " + parcoursEcolo.user.nom}
                                        subheader={parcoursEcolo.ville.ville}
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
                                        <Typography variant="body2" color="text.secondary">
                                            {parcoursEcolo.description}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Nombre de sac ramassés: {parcoursEcolo.nbSac}
                                        </Typography>
                                        <CardActions style={{ justifyContent: 'right' }}>
                                            {
                                                connectedUser.id === parcoursEcolo.user.id ?
                                                    <Button style={style.buttonDanger} variant="contained" onClick={() => {
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
                                    </CardContent>

                                </Card>
                            </Grid>
                        )
                    }) :
                    <Grid item xs={12} pt={4} align="center">
                        <Typography variant="body2" color="text.secondary" pb={2}>
                            Vous n'avez pas de parcours écolos partager avec la communauté
                        </Typography>
                        <Button style={style._defaultBgColor} size="small" variant="contained" sx={{ mb: 2 }} onClick={handleOpen}>Partager un parcours avec la communauté</Button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <FormParcoursEcolo handleClose={handleClose} handleRefresh={handleRefresh}></FormParcoursEcolo>
                        </Modal>
                    </Grid>
                }
            </Grid>
        </>
    )
}
