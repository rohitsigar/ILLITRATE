import React from "react";
import "./BeadStory.css";
import Lottie from "react-lottie";
import diamond from "../Lottie/diamond.json";
import pearl from "../Lottie/pearl.json";
import fast from "../Lottie/fastcar.json";

import BinarySearch from "./BinarySearch";

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
          <img className="diamond_storypartone" src="https://github.com/rohitsigar/ILLITRATE/blob/master/src/Assets/Jwelry.png?raw=true" />

           <div className="binary_midway">
             <p>
             One day the people of that place held a <span classname="meeting">meeting</span> and discuss among 
             themselves that why not organize a <span classname="fair">fair</span> for all the people over the
              world so that they get overwhelmed by seeing the real gemstones of our world.  
              Where it is <span classname="good">good, </span>, there is always a <span classname="bad">bad</span>. 
             </p>
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

     
             <img className="diamond_storyparttwo" src="https://github.com/rohitsigar/ILLITRATE/blob/master/src/Assets/Detective.png?raw=true" />
          
           
           </div>
          <div className="binary_story">
          <div className="diamond_game">
            <Lottie options={{ animationData:fast,}} />
             </div>
            <div className="binary_last">
              <p>So here your <span className="role">role</span> came into play, you have to <span classname="reach">reach out</span>
               to that particular string of beads before the robbers went.
               <span className="hint_statement">( <span className="hint">Hint:</span> Reach at the minimum time )</span>
              </p>
            </div>
            </div>
            </div>

            <div className="bead__tsk">
              Your Task Begins
            </div>
            <div className="problemStatement">
        <h1>Problem:</h1>
        <p>the train has 10 compartments, and there is a condition that in each compartment, there is only one passenger. The thief hid in Tran's compartment. You i.e. chief knew the weight of every passenger and thief. 
Find out the compartment’s number in which the thief is found.</p>
      </div>








            <div className="beads__beads">
              <BinarySearch />
            </div>



            <div className="beads__click">
              Click on the Box To Check For Beads
            </div>












         <div className="binary__blog">
        <h2>Binary Search</h2>
        <p>
          Binary Search Algorithm is one of the widely used searching techniques
          on a sorted array. This searching technique follows the divide and
          conquer strategy. The search space always reduces to half in every
          iteration.
        </p>
        <video
          className="home__logo"
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
        >
          <source
            src="https://github.com/rohitsigar/ILLITRATE/blob/master/WhatsApp%20Video%202021-01-18%20at%2000.40.12.mp4?raw=true"
            type="video/webm"
          />
        </video>
        <h4> Approach </h4>
        <ul>
          <li>
            <p className="binary_step">
              Array is supposed to be sorted in ascending order.
            </p>
          </li>
          <li>
            <p className="binary_step">
              Firstly initialize the two pointers, start at 0 and end at the
              last index of the array
            </p>
          </li>
          <li>
            <p className="binary_step">
              Next, we will introduce another variable mid which will mark the
              middle of the current array. That will be computed as
              (low+high)/2.
            </p>
          </li>
          <li>
            <p className="binary_step">
            If the element present at the mid index is equal to the element to be searched, then just return the mid index.
            </p>
          </li>
          <li>
            <p className="binary_step">
            If the element to be searched is smaller than the element present at the mid index, move end to mid-1, and all RHS will get discarded.            </p>
          </li>
          <li>
            <p className="binary_step">
            If the element to be searched is greater than the element present at the mid index, move beg to mid+1, and all LHS will get discarded.            </p>
          </li>
        </ul>
        <img
          className="binary__code"
          src="https://github.com/rohitsigar/ILLITRATE/blob/master/src/Assets/binarySearch%20Snippet.PNG?raw=true"
          alt="/"
        ></img>
        {/* <p classname="binary_ques">
          If there is a n sized array & you have to find element-x from the
          array, then what is the average number of indexes you have to
          traverse?
          <span className="binary_think">Think about it?</span>
        </p> */}
        <h4> Time Complexity </h4>
        <p classname="binary_timeCom">
        With each iteration, the search space is getting divided by that means
         that in the current iteration we have to deal with half of the previous iteration array, 
         and this step will continue till start reaches the end. Best case is where we found the searched element
          exactly at mid of array
          <br></br>
          <h3>Best: O(1) </h3>
          <h3> Average: O(logn) </h3>
          <h3> Worst: O(logn)</h3>
        </p>
        <h4> Why to prefer ?</h4>
        <p className="binary_diff">
        Since we always want to have less time complexity, and we know in linear searching, time is taken to search elements increases with an increase in the number of elements but in binary searching, it is done to either half of the original array. Also, Linear search performs
         equality comparisons and Binary search performs ordering comparisons.
        </p>

        <h6 className="binary__con">
          Concluding above article, we get to know that is a quick way to 
          find a value in a sorted sequesnce. Binary search maintains a contiguous subsequence
          of the starting sequence where the target value is surely located i.e. the search space.
        </h6>
      </div>
    </div>
  );
  
  

}

