import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import GreenButton from '../component/GreenButton';
import { Paper, Typography, CircularProgress, Divider } from '@mui/material';
import AuthService from "../services/auth.service"
import UserQuizService from '../services/user-quiz.service';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';

function Reponse({ question }) {
    const icon = question.userReponse[0].reponse.bonne ? <CheckCircleOutlineOutlinedIcon color="success" /> : <RemoveCircleOutlineOutlinedIcon color="error" />

    return (
        <>
            <Typography>
                {question.question.question}
            </Typography>
            <Typography color={question.userReponse[0].reponse.bonne ? "green" : "red"}>
                {question.userReponse[0].reponse.reponse}
            </Typography>
            {icon}
        </>
    )
}


export default function AnswerQuiz(props) {
    const { id, reponseId } = useParams();
    const navigate = useNavigate();
    const user = AuthService.getUser();
    const [reponses, setReponses] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const response = await UserQuizService.getUserQuiz(reponseId);
            setReponses(response);
        }
        fetchData();
    }, [id, reponseId])

    if (!user) {
        return (
            <Paper sx={{ p: 2 }}>
                <Typography>
                    Veuillez vous connecter pour accedez à cette page.
                </Typography>
            </Paper>
        )
    }

    if (!reponses) {
        return (
            <CircularProgress color="success" />
        )
    }

    const handleClick = () => {
        navigate("/quiz")
    };

    return (
        <Paper sx={{ p: 2 }}>
            <Typography align="center" variant="h4" gutterBottom component="div">
                {reponses.quiz.titre}
            </Typography>
            <Typography variant="body2" gutterBottom component="div">
                Le quiz portait sur les {reponses.quiz.theme}, voyons voir comment vous vous etes débrouillé !
            </Typography>
            {reponses.userQuestion.map((question) => {
                return (
                    <Reponse question={question} key={question.id} />
                )
            })}
            <Divider sx={{ m: 2 }} />
            <GreenButton title="Retourner au menu Quiz" handleClick={handleClick} />
        </Paper>
    )
}
