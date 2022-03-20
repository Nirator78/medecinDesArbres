import { Navigate } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Boutique from "./pages/Boutique";
import FichePedagogiques from "./pages/FichePedagogiques";
import Interface from "./pages/Interface"
import NotFound from "./pages/NotFound";
import ParcoursEcolo from "./pages/ParcoursEcolo";
import Quiz from "./pages/Quiz";

const MAP_ROUTES = [
    { path: "/", element: <Navigate to="/app" /> },
    { path: "/notfound", element: <NotFound /> },
    {
        path: "/app", element: <Interface />, children: [
            { index: true, element: <Accueil /> },
            { path: "boutique", element: <Boutique /> },
            { path: "quiz", element: <Quiz /> },
            { path: "parcours-ecolo", element: <ParcoursEcolo /> },
            { path: "fiche-pedagogique", element: <FichePedagogiques /> },
        ]
    },
];

export default MAP_ROUTES;
