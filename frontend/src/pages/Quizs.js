import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Paper, Typography, Grid } from '@mui/material';
import QuizService from '../services/quiz.service';
import GreenButton from '../component/GreenButton';

function SubHeader({ quiz }) {
    return (
        <>
            <Grid container justifyContent="space-between">
                <Grid item>
                    Theme: {quiz.theme}
                </Grid>
                <Grid item>
                    Level: {quiz.difficulte}
                </Grid>
            </Grid>
            <Typography>Age: {quiz.age}</Typography>
        </>
    )
}

function Quiz({ quiz }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/app/quiz/" + quiz.id);
    };

    return (
        <>
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
                    image={"http://localhost:3000/" + quiz?.image?.url}
                    alt={quiz.description}
                />
                <CardContent>
                    <CardActions>
                        <GreenButton title="Faire le Quiz" handleClick={handleClick} />
                    </CardActions>
                </CardContent>
            </Card>
        </>
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

    return (
        <>
            <Paper>
                <Typography align="center" variant="h4" gutterBottom component="div">
                    Quiz
                </Typography>
                <Grid container spacing={2} sx={{ p: 2 }}>
                    {quizs.map((quiz) => {
                        return (
                            <Grid item xs={4} key={quiz.id}>
                                <Quiz quiz={quiz} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Paper>
        </>
    )
}
