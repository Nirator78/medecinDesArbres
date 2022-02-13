import ArticleRoute from "./Route/ArticleRoute";
import CommandeRoute from "./Route/CommandeRoute";
import FichePedagogiqueRoute from "./Route/FichePedagogiqueRoute";
import PanierRoute from "./Route/PanierRoute";
import ParcoursEcoloRoute from "./Route/ParcoursEcoloRoute";
import UserRoute from "./Route/UserRoute";
import VilleRoute from "./Route/VilleRoute";
import ConferenceRoute from "./Route/ConferenceRoute";
import VisualNovelRoute from "./Route/VisualNovelRoute";
import QuizRoute from "./Route/QuizRoute";
import UserQuizRoute from "./Route/UserQuizRoute";
import UserVisualNovelRoute from "./Route/UserVisualNovelRoute";
import UploadRoute from "./Route/UploadRoute";

export const Routes = [
    ...ArticleRoute,
    ...CommandeRoute,
    ...FichePedagogiqueRoute,
    ...PanierRoute,
    ...ParcoursEcoloRoute,
    ...UserRoute,
    ...VilleRoute,
    ...ConferenceRoute,
    ...VisualNovelRoute,
    ...QuizRoute,
    ...UserQuizRoute,
    ...UserVisualNovelRoute,
    ...UploadRoute,
];
