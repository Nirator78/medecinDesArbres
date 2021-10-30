import React from 'react';
import '../css/App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Acceuil from "../page/Acceuil"
import Quiz from "../page/Quiz"
import VisualNovel from "../page/VisualNovel"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <div>
            <Route path="/home" component={Acceuil}/>
            <Route path="/Quiz" component={Quiz}/>
            <Route path="/VisualNovel" component={VisualNovel}/>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
