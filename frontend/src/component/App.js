import React from 'react';
import '../css/App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Accueil from "../page/Accueil"
import Quiz from "../page/Quiz"
import ParcoursEcolo from "../page/ParcoursEcolo"
import VisualNovel from "../page/VisualNovel"
import NotFound from "../page/NotFound"
import Boutique from '../page/Boutique';
import Connexion from '../page/Auth/Connexion';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Accueil}/>
            <Route path="/ParcoursEcolo" exact component={ParcoursEcolo}/>
            <Route path="/Quiz" exact component={Quiz}/>
            <Route path="/Quiz/{id}" exact component={Quiz}/>
            <Route path="/VisualNovel" exact component={VisualNovel}/>
            <Route path="/Boutique" exact component={Boutique}/>
            <Route component={NotFound}/>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
