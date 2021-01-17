import React from "react";
import "./BeadStory.css";
import Lottie from 'react-lottie';
import diamond from "../Lottie/diamond.json";
import pearl from "../Lottie/pearl.json";

export default function BeadStory() {
  return (
  <div className="binary_search">
      <div className="binary_heading">
        
            <h1 className="mystery"> Mystery <span className="beady"> Beads</span></h1>
            
            <div className="diamond">
            <Lottie options={{ animationData:diamond,}} />
            </div>
          
      </div>
      <div className="binary_mid">
          <div className="binary_story">
            <div className="binary_start">
               <span className="hello">Hey Champ!</span>
               <p>Welcome to the exciting and fascinating journey of the mind.
                  There is a place that shines like a sun, It’s a 
                  <span className="beautiful"> beautiful</span> place which consists of numerous 
                  <span className="gem">gemstones</span> diamonds and especially that place know for it’s 
                  <span className="string">“strings of beads”</span> because every string has a different number of beads.</p>
            </div>
            <div className="diamond_area">
            <Lottie options={{ animationData:pearl,}} />
            </div>
          </div>
          <div className="binary_story">
           <div className="binary_midway">
             <p>
             One day the people of that place held a <span classname="meeting">meeting</span> and discuss among 
             themselves that why not organize a <span classname="fair">fair</span> for all the people over the
              world so that they get overwhelmed by seeing the real gemstones of our world.  
              Where it is <span classname="good">good, </span>, there is always a <span classname="bad">bad</span>. 
             </p>
             </div>
             <div className="diamond_storypartone">

             </div>
          </div>
          <div className="binary_story">
           <div className="binary_midway">
              <p>
              So that’s why here you are welcomed as a 
              <span className="detective"> detective </span>. 
              On reaching the fare point you are informed that the <span className="robber">robber</span> has already 
              arrived there and had planning to rob their precious “string of beads” which consist of 
              <span className="x"> “x” </span> number of beads and they are smart enough to 
              <span className="escape">escape</span> with the precious “string of beads”.
              </p>
           </div>

           <div className="diamond_storyparttwo">

             </div>
           
           </div>
          <div className="binary_story">
            <div className="binary_last">
              <p>So here your <span className="role">role</span> came into play, you have to <span classname="reach">reach out</span>
               to that particular string of beads before the robbers went.
               <span className="hint_statement">( <span className="hint">Hint:</span> Reach at the minimum time )</span>
              </p>
            </div>
            <div className="diamond_game">

             </div>
          </div>
          </div>
      </div>
  )
  
}

