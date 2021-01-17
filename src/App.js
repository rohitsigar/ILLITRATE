import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import CompleStory from "./Components/CompleStory";
import "./App.css";
import ComponentCard from "./Components/ComponentCard";
import Home from "./Components/Home";
import "./App.css";
import Footer from "./Components/Footer";
import Algo from "./Components/Algo";
import LinearSearch from "./Components/LinearSearch";
import BinarySearch from "./Components/BinarySearch";

import About from "./Components/About";
import puzzle from "./Assets/Puzzle.png";
import cube from "./Assets/cube.png";
import BeadStory from "./Components/BeadStory";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/building">
            <BinarySearch />
          </Route>
          <Route path="/LinearSearch">
            <Header />
            <CompleStory />
          </Route>
          <Route path="/BinarySearch">
            <Header />
            <BeadStory />
          </Route>
          <Route path="/Algorithm">
            <Header />
            <Algo />
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <ComponentCard
              headline="Algorithm"
              para="Aspiring to excel in Competitive Coding? Then You should be aware what all STL offers...
              STL has oceans of algorithms, here is your opportunity.... "
              buttonContent="Learn from Here »"
              sideimage={puzzle}
            />
            <ComponentCard
              headline="Puzzle"
              para="Practice makes a man perfect! what if add with practice..."
              buttonContent="Go Here »"
              sideimage={cube}
            />
            <About />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
