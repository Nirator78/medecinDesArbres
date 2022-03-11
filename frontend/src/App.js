import React from "react";
import { unstable_HistoryRouter as HistoryRouter, useRoutes } from "react-router-dom";
import { createBrowserHistory } from 'history';
import MAP_ROUTES from "./routes";

function AppRoutes() {
	const routesElem = useRoutes(MAP_ROUTES);
	return routesElem;
}

function App() {
	return (
		<div className="App">
			<HistoryRouter history={createBrowserHistory()}>
				<AppRoutes />
			</HistoryRouter>
		</div>
	);
}

export default App;
