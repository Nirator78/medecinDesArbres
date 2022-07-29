import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Paper, Typography, Grid, styled } from '@mui/material';
import QuizService from '../services/quiz.service';
import GreenButton from '../component/GreenButton';
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

function SubHeader({ quiz }) {
    return (
        <>
            <Grid container justifyContent="space-between">
                <Grid item>
                    Thème : {quiz.theme}
                </Grid>
                <Grid item>
                    Difficulté : {quiz.difficulte}
                </Grid>
            </Grid>
            <Typography>Age : {quiz.age} ans</Typography>
        </>
    )
}

function Quiz({ quiz }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/quiz/" + quiz.id);
    };

    return (
        <Card>
            <CardHeader
                title={quiz.titre}
                subheader={<SubHeader quiz={quiz} />}
            />

            <CardMedia
                component="img"
                height="194"
                style={{
                    maxWidth: 500,
                    maxHeight: 180,
                }}
                image={baseURLImage + quiz?.image?.url}
                alt={quiz.description}
            />
            <CardActions sx={{ py: 2, px: 2 }}>
                <GreenButton title="Faire le Quiz" handleClick={handleClick} />
            </CardActions>
        </Card>
    )
}

export default function Quizs(props) {
    const [quizs, setQuizs] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await QuizService.getQuizs();
            setQuizs(response);
        }
        fetchData();
    }, [])

    //TODO: rajouter les filtres par ages via url

    const style = useStyles();
    return (
        <>
            <CustomPaper sx={style.containerPaperPage.sx}>
                <Typography align="center" variant="h4" gutterBottom component="div" sx={{ mb: 4 }}>
                    Quiz
                </Typography>
                <Typography align="center" variant="body1" component="div" sx={{ mb: 4 }}>
                    Nos quiz sont spécialement préparés pour vous. Vous pouvez retrouvez des quiz de tout niveau et de tout âge. La durée de chacuns des quiz est de 3 minutes maximum alors n’attendez pas.
                </Typography>
                <Typography align="center" variant="body1" component="div" sx={{ mb: 4 }}>
                    Évaluez vos connaissances et devenez un médecin des arbres vous aussi !
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3, pl: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {quizs.map((quiz) => {
                        return (
                            <Grid item xs={4} key={quiz.id}>
                                <Quiz quiz={quiz} />
                            </Grid>
                        )
                    })}
                </Grid>
            </CustomPaper>
        </>
    )
}
