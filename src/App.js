import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import LinearSearch from "./Components/LinearSearch";
import "./App.css";
import ComponentCard from "./ComponentCard";
import Home from "./Components/Home";
import "./App.css";
import Footer from "./Components/Footer";
import Algo from "./Components/Algo";


import About from "./Components/About";
import puzzle from "./Assets/Puzzle.png";
import cube from "./Assets/cube.png";



function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/train">
            <LinearSearch />
          </Route>
          <Route path="/algo">
            <Header />
            <LinearSearch />
          </Route>
          <Route path="/a">
            <Header />
            <Algo />
            <Footer />
          </Route>
          <Route path="/">

            <Header />
            <Home />
            <ComponentCard
              headline="Algorithm"
              para="You got to learn about algo"
              buttonContent="lets get started »"
              sideimage={puzzle}
            />
            <ComponentCard
              headline="Puzzle"
              para="Lets practice"
              buttonContent="do practice »"
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
