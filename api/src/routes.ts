import ArticleRoute from "./Route/ArticleRoute";
import CommandeRoute from "./Route/CommandeRoute";
import FichePedagogiqueRoute from "./Route/FichePedagogiqueRoute";
import PanierRoute from "./Route/PanierRoute";
import UserRoute from "./Route/UserRoute";
import VilleRoute from "./Route/VilleRoute";
import ConferenceRoute from "./Route/ConferenceRoute";
import VisualNovelRoute from "./Route/VisualNovelRoute";
import QuizRoute from "./Route/QuizRoute";

export const Routes = [
    ...ArticleRoute,
    ...CommandeRoute,
    ...FichePedagogiqueRoute,
    ...PanierRoute,
    ...UserRoute,
    ...VilleRoute,
    ...ConferenceRoute,
    ...VisualNovelRoute,
    ...QuizRoute,
];
