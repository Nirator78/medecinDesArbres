import React, { useEffect, useState } from 'react';
import { Paper, Typography, Grid, Button, CardActions, CardContent, Card, Avatar } from '@mui/material';
import { AuthService, ConferenceService } from "../services";
import AddIcon from '@mui/icons-material/Add';
import moment from 'moment';
import { useStyles } from "../utils/style.ts";

export default function Conference(props) {
    const [conferenceList, setConferenceList] = useState([]);
    const [refresh, setRefresh] = useState(false);

    const handleRefresh = () => setRefresh(true);

    const connectedUser = AuthService.getUser();

    useEffect(() => {
        async function fetchData() {
            const response = await ConferenceService.getAllConferences();
            setConferenceList(response);
            setRefresh(false);
        }
        fetchData();
    }, [refresh])
    const style = useStyles();

    return (
        <>
            <Paper sx={style.containerPaperPage.sx}>
                <Typography sx={{ mb: 4 }} align="center" variant="h4" gutterBottom component="div">
                    Informez vous grâce à nos conférences, adaptées à tous !
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3, pl: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {conferenceList?.map((conf, index) => {
                        return (
                            <Grid item xs={4} key={index}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardContent>
                                        <Typography component={'span'} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            {conf?.titre} - {conf?.theme}
                                        </Typography>
                                        <Typography variant="h5" component="div">
                                            {conf?.description}
                                        </Typography>
                                        <Typography component={'span'} sx={{ mb: 1.5 }} color="text.secondary">
                                            {moment(conf?.dateDebut).format('DD/MM/yyyy')} - {moment(conf?.dateFin).format('DD/MM/yyyy')}
                                        </Typography>
                                        <Typography component={'div'} variant="body2">
                                            Nombre de participants <Avatar sx={{ width: 32, height: 32, bgcolor: 'green' }}> {conf?.conferenceParticipants?.length}</Avatar>
                                        </Typography>
                                    </CardContent>
                                    <CardActions style={{ justifyContent: 'center' }}>
                                        {
                                            AuthService.isLogin() && !conf?.conferenceParticipants?.find(participant => participant.user.id === connectedUser.id) ?
                                                <Button variant="contained" onClick={() => {
                                                    ConferenceService.addUserToConference(conf.id, connectedUser.id);
                                                    handleRefresh();
                                                }}>
                                                    <AddIcon></AddIcon> Rejoindre la conférence</Button> : <></>
                                        }
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </Paper>
        </>
    )
}
