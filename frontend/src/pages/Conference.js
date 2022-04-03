import React, {useEffect, useState} from 'react';
import { Paper, Typography, Grid, Button } from '@mui/material';
import ConferenceService from "../services/conference.service";
import AuthService from "../services/auth.service";
import AddIcon from '@mui/icons-material/Add';

export default function Conference(props) {
    const [conferenceList, setConferenceList] = useState([]);
    const [refresh, setRefresh] = useState(false);

    const handleRefresh = () => setRefresh(true);

    const connectedUser = AuthService.getUser();

    useEffect(async () => {
        const response = await ConferenceService.getAllConferences();
        setConferenceList(response);
        setRefresh(false);
    }, [refresh])
    
    return (
        <>
            <Paper>
                <Typography align="center" variant="h4" gutterBottom component="div">
                    Informez vous grâce à nos conférence, adaptées a tous !
                </Typography>
                <Grid container spacing={2}>
                    {conferenceList?.map((conf, index) => {
                        return (
                            <Grid item xs={4} key={index}>
                                <Typography>
                                    {conf?.titre} - {conf?.theme}
                                </Typography>
                                <Typography>
                                    {conf?.description}
                                </Typography>
                                <Typography>
                                    {conf?.dateDebut} - {conf?.dateFin}
                                </Typography>
                                <Typography>
                                    Nombre de participants - {conf?.conferenceParticipants?.length}
                                </Typography>
                                {
                                    AuthService.isLogin() && !conf?.conferenceParticipants?.find(participant => participant.user.id === connectedUser.id) ?
                                        <Button variant="contained" onClick={() => {
                                            ConferenceService.addUserToConference(conf.id, connectedUser.id);
                                            handleRefresh();
                                        }}>
                                            <AddIcon></AddIcon> Rejoindre la conférence</Button> : <></>
                                }
                            </Grid>
                        )
                    })}
                </Grid>
            </Paper>
        </>
    )
}
