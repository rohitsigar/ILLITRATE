import React from "react";
import "./BeadStory.css";
import Lottie from 'react-lottie';
import diamond from "../Lottie/diamond.json";

export default function BeadStory() {
  return <div className="binary_search">
      <div className="binary_heading">
          <h1>
            <span className="mystery">Mystery</span>
            <div className="diamond">
            <Lottie options={{ animationData:diamond,}} />
            </div>
            <span className="bead">Beads</span>
          </h1>
      </div>
      <div className="binary_story">
          
      </div>
  </div>;
}
