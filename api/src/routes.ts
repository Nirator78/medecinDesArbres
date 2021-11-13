import ArticleRoute from "./Route/ArticleRoute";
import CommandeRoute from "./Route/CommandeRoute";
import FichePedagogiqueRoute from "./Route/FichePedagogiqueRoute";
import PanierRoute from "./Route/PanierRoute";
import UserRoute from "./Route/UserRoute";
import VilleRoute from "./Route/VilleRoute";
import ConferenceRoute from "./Route/ConferenceRoute";
import VisualNovelController from "./Route/VisualNovelRoute";

export const Routes = [
    ...ArticleRoute,
    ...CommandeRoute,
    ...FichePedagogiqueRoute,
    ...PanierRoute,
    ...UserRoute,
    ...VilleRoute,
    ...ConferenceRoute,
    ...VisualNovelController,
];
