import { Navigate } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Boutique from "./pages/Boutique";
import FichePedagogiques from "./pages/FichePedagogiques";
import Interface from "./pages/Interface"
import NotFound from "./pages/NotFound";
import ParcoursEcolo from "./pages/ParcoursEcolo";
import Conference from "./pages/Conference";
import Quizs from "./pages/Quizs";
import QuizPage from "./pages/QuizPage";
import Profile from "./pages/Profile";
import Panier from "./pages/Panier";
import FichePedagogiquePage from "../src/component/FichePedagogiquePage";
import AnswerQuiz from "./pages/AnswerQuiz";

const MAP_ROUTES = [
    {
        path: "/", element: <Interface />, children: [
            { index: true, element: <Accueil /> },
            { path:'*', exact:true, element: <NotFound /> },
            { path: "boutique", element: <Boutique /> },
            { path: "conference", element: <Conference /> },
            {
                path: "quiz", children: [
                    { index: true, element: <Quizs /> },
                    {
                        path: ":id", children: [
                            { index: true, element: <QuizPage /> },
                            { path: "reponse/:reponseId", element: <AnswerQuiz /> },
                        ]
                    },
                ]
            },
            { path: "parcours-ecolo", element: <ParcoursEcolo /> },
            { path: "profile", element: <Profile /> },
            { path: "panier", element: <Panier /> },
            {
                path: "fiche-pedagogique", children: [
                    { index: true, element: <FichePedagogiques /> },
                    { path: ":id", element: <FichePedagogiquePage /> }
                ]
            }
            // ajout enfant ici
        ]
    },
];

export default MAP_ROUTES;
