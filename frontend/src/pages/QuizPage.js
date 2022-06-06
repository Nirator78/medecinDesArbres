import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import QuizService from '../services/quiz.service';
import GreenButton from '../component/GreenButton';
import { Paper, Typography, CircularProgress, Card, CardHeader, CardMedia, CardContent, FormControl, RadioGroup, FormControlLabel, Radio, Divider } from '@mui/material';


function Question({ question, getValue }) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event) => {
        setValue(event.target.value);
        getValue({ id: question.id, answer: event.target.value })
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
                image={"http://localhost:3000/" + question?.image?.url}
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
    const [quiz, setQuiz] = useState(null);
    const [answers, setAnswers] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await QuizService.getQuiz(id);
            setQuiz(response);
        }
        fetchData();
    }, [])

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
            if (answer.id === value.id && answer.answer === value.answer) {
                alreadyExist = true;
                break
            } else if (answer.id === value.id) {
                temp.splice(index)
                break;
            }
            index = index + 1;
        }
        if (!alreadyExist) {
            temp.push(value)
            setAnswers(temp)
        }
    }


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
            <GreenButton title="Envoyer vos réponses" />
        </Paper>
    )
}
