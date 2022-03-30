import React, {useEffect, useState} from 'react';
import { Paper, Typography, Grid, Modal, Box, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ParcoursEcoloService from "../services/parcours-ecolo.service";
import AuthService from "../services/auth.service";
import FormParcoursEcolo from "../component/FormParcoursEcolo";

export default function ParcoursEcolo(props) {
    const [parcoursEcoloList, setParcoursEcoloList] = useState([]);
    const [open, setOpen] = useState(false);
    const [refresh, setRefresh] = useState(false);

    const connectedUser = AuthService.getUser();

    useEffect(async () => {
        const response = await ParcoursEcoloService.getAllParcoursEcolos();
        setParcoursEcoloList(response);
        setRefresh(false);
    }, [refresh])

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleRefresh = () => setRefresh(true);

    return (
        <>
            <Paper>
                <Typography align="center" variant="h4" gutterBottom component="div">
                    Liste des parcours écolos de nos utilisateurs
                </Typography>
                {
                    AuthService.isLogin() ?
                        <div>
                            <Button variant="contained" onClick={handleOpen}>Partager son parcours écolo</Button>
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
                <Grid container spacing={2}>
                    {parcoursEcoloList.map((parcoursEcolo, index) => {
                        return (
                            <Grid item xs={4} key={index}>
                                {
                                    connectedUser.id === parcoursEcolo.user.id ?
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
                                <Typography variant="h6">
                                    {parcoursEcolo.description} {parcoursEcolo.user.nom} {parcoursEcolo.user.prenom}
                                </Typography>
                                <img
                                    src={"http://localhost:3000/" + parcoursEcolo?.image?.url}
                                    alt={parcoursEcolo.description}
                                    width="200"
                                />
                                <Typography>
                                    Nombre de sac ramassés: {parcoursEcolo.nbSac}
                                </Typography>
                            </Grid>
                        )
                    })}
                </Grid>
            </Paper>
        </>
    )
}
