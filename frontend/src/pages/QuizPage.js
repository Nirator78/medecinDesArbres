import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import QuizService from '../services/quiz.service';
import GreenButton from '../component/GreenButton';


export default function QuizPage(props) {
    const { id } = useParams();
    const [quiz, setQuiz] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await QuizService.getQuiz(id);
            setQuiz(response);
        }
        fetchData();
    }, [])

    console.log(quiz)

    return (
        <>
        </>
    )
}
