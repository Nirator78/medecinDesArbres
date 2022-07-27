import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import QuizService from '../services/quiz.service';
import GreenButton from '../component/GreenButton';
import { Paper, Typography, CircularProgress, Card, CardHeader, CardMedia, CardContent, FormControl, RadioGroup, FormControlLabel, Radio, Divider } from '@mui/material';
import AuthService from "../services/auth.service"
import UserQuizService from '../services/user-quiz.service';
import { baseURLImage } from '../utils/axios';

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

    return (
        <Card sx={{ width: 500 }}>
            <CardHeader
                title={question.question}
            />

            <CardMedia
                component="img"
                height="194"
                style={{
                    maxWidth: 500,
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
                    Veuillez vous connecter pour accedez à cette page.
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

    const handleClick = () => {
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
            UserQuizService.postAnswers(user.id, quiz.id, answers);
            navigate("/quiz")
        }
    };

    return (
        <Paper sx={{ p: 2 }}>
            <Typography align="center" variant="h4" gutterBottom component="div">
                {quiz.titre}
            </Typography>
            <Typography variant="body2" gutterBottom component="div">
                Répondez a toute les questions puis envoyer vos réponses afin d'affirmer vos connaissances sur les {quiz.theme} !
            </Typography>
            {quiz.questions.map((question) => {
                return (
                    <Question question={question} getValue={setNewValue} key={question.id} />
                )
            })}
            <Divider sx={{ m: 2 }} />
            {error && (
                <Typography color="error">Le formulaire n'est pas complet, vous avez oubliez une ou plusieurs question !</Typography>
            )}
            <GreenButton title="Envoyer vos réponses" handleClick={handleClick} />
        </Paper>
    )
}
