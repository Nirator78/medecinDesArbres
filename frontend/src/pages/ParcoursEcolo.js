import React, { useEffect, useState } from 'react';
import { Paper, Typography, Grid, Modal, Button, Card, CardHeader, Avatar, CardMedia, CardContent, CardActions } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { AuthService, ParcoursEcoloService } from "../services";
import FormParcoursEcolo from "../component/FormParcoursEcolo";
import { useStyles } from "../utils/style.js";
import {baseURLImage} from '../utils/axios';

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

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleRefresh = () => setRefresh(true);
    const style = useStyles();

    return (
        <>
            <Paper sx={style.containerPaperPage.sx}>
                <Typography align="center" variant="h4" gutterBottom component="div">
                    Liste des parcours écolos de nos utilisateurs
                </Typography>

                {
                    AuthService.isLogin() ?
                        <div style={{textAlign: 'center'}}>
                            <Button variant="contained" sx={style.buttonMb} onClick={handleOpen}>Partager son parcours écolo</Button>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <FormParcoursEcolo handleClose={handleClose} handleRefresh={handleRefresh}></FormParcoursEcolo>
                            </Modal>
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
                                            <Avatar aria-label="recipe">
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
                                                connectedUser?.id === parcoursEcolo.user.id ?
                                                    <Button variant="contained" onClick={() => {
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
                    })}
                </Grid>
            </Paper>
        </>
    )
}
