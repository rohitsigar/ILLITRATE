import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Components/Header";
import LinearSearch from "./Components/LinearSearch";
import "./App.css";

import CardSlider from "./Components/CardSlider";
import ComponentCard from "./ComponentCard";

import Home from "./Components/Home";
import "./App.css";
import Footer from "./Components/Footer";
import Algo from "./Components/Algo";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/algo">
            <Header />
            <LinearSearch />
          </Route>
          <Route path="/a">
            <Header />
            <Algo />
          </Route>
          <Route path="/">

            <Header />
            <Home />
            <ComponentCard
              headline="Algo"
              para="You got to learn about algo"
              buttonContent="lets get started"
              sideimage="https://banner2.cleanpng.com/20180426/xue/kisspng-algorithms-data-structures-=-programs-data-struc-5ae173e12e69b4.6797280015247247051901.jpg"
            />
            <ComponentCard
              headline="puzzle"
              para="Lets practice"
              buttonContent="do practice"
              sideimage="https://w1.pngwing.com/pngs/828/644/png-transparent-book-black-and-white-rubiks-cube-coloring-book-puzzle-puzzle-cube-drawing-game-threedimensional-space.png"
            />

      <Footer />

          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
