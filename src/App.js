import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Searchpage from "./pages/search/Searchpage";

// import { useStateValue } from './StateProvider'
// import {ThemeProvider, createMuiTheme, Paper, Card} from '@material-ui/core'

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <Searchpage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
