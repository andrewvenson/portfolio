// Main App
import React from "react";
// should have imported the reset.css from the get go, I'll implement soon
// import "./reset.css";

import "./App.css";
import NavComponent from "./components/NavComponent";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import HomeRun from "./components/HomeRun";
import Resume from "./components/Resume";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    // Router for navigating
    <Router>
      <NavComponent />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/drews_portfolio" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Portfolio} />
      </Switch>
      <HomeRun />
      <Resume />
    </Router>
  );
}

export default App;
