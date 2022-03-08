import { Navigate } from "react-router-dom";
import Interface from "./pages/Interface"

const MAP_ROUTES = [
    { path: "/", element: <Navigate to="/app" /> },
    { path: "/app", element: <Interface /> },
];

export default MAP_ROUTES;