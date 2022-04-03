import { Navigate } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Boutique from "./pages/Boutique";
import FichePedagogiques from "./pages/FichePedagogiques";
import Interface from "./pages/Interface"
import NotFound from "./pages/NotFound";
import ParcoursEcolo from "./pages/ParcoursEcolo";
import Conference from "./pages/Conference";
import Quiz from "./pages/Quiz";
import Profile from "./pages/Profile";
import FichePedagogiquePage from "../src/component/FichePedagogiquePage";

const MAP_ROUTES = [
    { path: "/", element: <Navigate to="/app" /> },
    { path: "/notfound", element: <NotFound /> },
    {
        path: "/app", element: <Interface />, children: [
            { index: true, element: <Accueil /> },
            { path: "boutique", element: <Boutique /> },
            { path: "conference", element: <Conference /> },
            { path: "quiz", element: <Quiz /> },
            { path: "parcours-ecolo", element: <ParcoursEcolo /> },
            { path: "profile", element: <Profile /> },
            { path: "fiche-pedagogique" , children: [
                { index: true, element: <FichePedagogiques /> },
                { path: ":id", element: <FichePedagogiquePage /> }
            ]}
            // ajout enfant ici
        ]
    },
];

export default MAP_ROUTES;
