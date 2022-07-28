import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import QuizService from '../services/quiz.service';
import GreenButton from '../component/GreenButton';
import { Paper, Typography, CircularProgress, Card, CardHeader, CardMedia, CardContent, FormControl, RadioGroup, FormControlLabel, Radio, Divider, styled } from '@mui/material';
import AuthService from "../services/auth.service"
import UserQuizService from '../services/user-quiz.service';
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


function Question({ question, getValue }) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event) => {
        setValue(event.target.value);
        getValue({
            fini: 1,
            question: question.id,
            userReponse: [{
                reponse: event.target.value
            }]
        })
    };
    const style = useStyles();

    return (
        <Card sx={{ /*width: 500*/my: 2 }}>
            <CardHeader
                title={question.question}
            />

            <CardMedia
                component="img"
                height="194"
                style={{
                    //maxWidth: 500,
                    maxHeight: 180,
                }}
                image={baseURLImage + question?.image?.url}
                alt={question.question}
            />
            <CardContent>
                <FormControl>
                    <RadioGroup
                        aria-labelledby={question.id}
                        name={question.question}
                        value={value}
                        onChange={handleChange}
                    >
                        {question.reponse.map((reponse) => {
                            return (
                                <FormControlLabel value={reponse.id} control={<Radio />} label={reponse.reponse} key={reponse.id} />
                            )
                        })}
                    </RadioGroup>
                </FormControl>
            </CardContent>
        </Card>
    )
}


export default function QuizPage(props) {
    const { id } = useParams();
    const navigate = useNavigate();
    const user = AuthService.getUser();
    const [quiz, setQuiz] = useState(null);
    const [answers, setAnswers] = useState([])
    const [error, setError] = useState(false);
    const style = useStyles();

    useEffect(() => {
        async function fetchData() {
            const response = await QuizService.getQuiz(id);
            setQuiz(response);
        }
        fetchData();
    }, [id])

    if (!user) {
        return (
            <Paper sx={{ p: 2 }}>
                <Typography>
                    Veuillez vous connecter pour accéder à cette page.
                </Typography>
            </Paper>
        )
    }

    if (!quiz) {
        return (
            <CircularProgress color="success" />
        )
    }

    const setNewValue = (value) => {
        let temp = answers;
        let alreadyExist = false;
        let index = 0;
        for (let answer of temp) {
            alreadyExist = false;
            if (answer.question === value.question && answer.userReponse[0].reponse === value.userReponse[0].reponse) {
                alreadyExist = true;
                break
            } else if (answer.question === value.question) {
                temp.splice(index, 1)
                break;
            }
            index = index + 1;
        }

        if (!alreadyExist) {
            temp.push(value)
            setAnswers(temp)
        }
    }

    const handleClick = async () => {
        let exist = true;
        quiz.questions.forEach((question) => {
            let answerExist = false;
            answers.forEach((answer) => {
                if (answer.question === question.id) {
                    answerExist = true;
                }
            })
            if (!answerExist) {
                exist = false;
            }
        })

        setError(!exist);

        if (exist) {
            const response = await UserQuizService.postAnswers(user.id, quiz.id, answers);
            navigate("/quiz/" + id + "/reponse/" + response.id)
        }
    };


    return (
        <CustomPaper sx={style.containerPaperPage.sx}>
            <Typography align="center" variant="h4" gutterBottom component="div" sx={{ mb: 4 }}>
                {quiz.titre}
            </Typography>
            <Typography variant="body2" gutterBottom component="div" sx={{ mb: 2 }}>
                Répondez à toutes les questions puis envoyez vos réponses afin d'évaluer vos connaissances sur les {quiz.theme} !
            </Typography>
            <Paper elevation={0} sx={style.containerPaperBloc.sx}>
            {quiz.questions.map((question) => {
                return (
                    <Question question={question} getValue={setNewValue} key={question.id} />
                )
            })}
            </Paper>
            <Divider sx={{ m: 2 }} />
            {error && (
                <Typography color="error">Le formulaire n'est pas complet, vous avez oublié une ou plusieurs questions !</Typography>
            )}
            <GreenButton title="Envoyer vos réponses" handleClick={handleClick} />
        </CustomPaper>
    )
}
