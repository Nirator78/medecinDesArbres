import React, { useEffect, useState } from 'react';
import { Paper, Typography, Grid, Button, CardActions, CardContent, Card, styled, Chip } from '@mui/material';
import { AuthService, ConferenceService } from "../services";
import AddIcon from '@mui/icons-material/Add';
import moment from 'moment';
import { useStyles } from "../utils/style.js";
import { GreenButton } from '../component';

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

    const handleRemoveUserConference = async (conferenceId, userId) => {
        await ConferenceService.removeUserToConference(conferenceId, userId);
        handleRefresh();
    }
    const style = useStyles();

    return (
        <>
            <CustomPaper sx={style.containerPaperPage.sx}>
                <Typography sx={{ mb: 4 }} align="center" variant="h4" gutterBottom component="div">
                    Informez vous grâce à nos conférences, adaptées à tous !
                </Typography>
                <Typography align="center" variant="body1" component="div" sx={{ mb: 4 }}>
                    Ajouter un petit text explicatif...
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3, pl: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {conferenceList?.map((conf, index) => {
                        return (
                            <Grid item xs={4} key={index}>
                                <Card /*sx={{ maxWidth: 345 }}*/style={style.card}>
                                    <CardContent sx={style.cardContent}>
                                        <Typography variant="h5" component="div" sx={{ pb: 1 }}>
                                            {conf?.titre} - {conf?.theme}
                                        </Typography>
                                        <Typography /*component={'span'}*/ sx={{ fontSize: 14, pb: 2 }} color="text.secondary" gutterBottom>
                                            {conf?.description}
                                        </Typography>
                                        <Typography /*component={'span'}*/ sx={{ pb: 1 }} color="text.secondary">
                                            {moment(conf?.dateDebut).format('DD/MM/yyyy')} - {moment(conf?.dateFin).format('DD/MM/yyyy')}
                                        </Typography>
                                        <Typography component={'div'} variant="body2">
                                            Nombre de participants : <Chip sx={ style.chip } label={conf?.conferenceParticipants?.length} />
                                        </Typography>
                                        <CardActions style={{ justifyContent: 'center' }}>
                                            
                                            {
                                                AuthService.isLogin() && (
                                                    !conf?.conferenceParticipants?.find(participant => participant.user.id === connectedUser.id) ?
                                                        <Button variant="contained" sx={style.button} onClick={() => {
                                                            ConferenceService.addUserToConference(conf.id, connectedUser.id);
                                                            handleRefresh();
                                                        }}>
                                                            <AddIcon></AddIcon> Rejoindre la conférence</Button> :
                                                    <Button sx={style.buttonDanger} variant="contained" 
                                                        onClick={() => {
                                                            handleRemoveUserConference(conf.id, connectedUser.id)
                                                        }}
                                                    >
                                                        Ne plus participer à la conférence
                                                    </Button>
                                                )
                                            }
                                        </CardActions>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </CustomPaper>
        </>
    )
}
