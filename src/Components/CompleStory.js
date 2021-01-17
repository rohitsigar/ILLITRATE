import React from 'react'
import "./CompleStory.css";
import Lottie from 'react-lottie';
import cop from "../Lottie/policecar.json";
import police from "../Lottie/policeman.json";
import bagmoney from "../Lottie/bagmoney.json";
import badge from "../Lottie/badge.json";

import thief from "../Assets/chasingthief.png";


function CompleStory() {
  return (
    <div className="linearSearch">
    <div className="linear__header">
       <h1>
         <span className="black"> Scratch the</span>
         <span className="saffron">Lie <span className="black1">find the</span></span>
         <div className="cop">
           <Lottie options={{ animationData:badge,}} />
         </div>
         <span className="orange">Thief</span>
       </h1>
    </div>
    <div className="linear__story">
         <div className="lineary_storyone">
         <div className="linear__start">
            <span className="welcome"> Hello chief,</span>
            <p> welcome to this enthralling <span className="journey">Journey</span> filled with action, <span className="adven">Adventure</span> and excitement.
               You have been appointed as the new police station chief of an <span className="town">Infamous Town </span> since it is filled with thieves committing 
               crimes now and then. All you have to do is show no mercy to these ville thieves who are <span className="terror">Terrorizing</span> the town.</p>
         </div>
         <div className="linear__police">
           <Lottie options={{ animationData:police,}} />
         </div>
         </div>
         
            
         <div className="linear_storytwo">
           <div className="linear__runthief">
           <img className="thiefRun" src={thief} alt="" />
         
         </div>
           <div className="linear__mid">
              <p>You are welcomed the very 
                <span className="day"> first day</span>
                 at office with some serious task on shoulders.
                  A <span className="robbery"> Robbery</span> has been reported nearby and you rush 
                  to the site immediately.
                  On reaching the crime scene you are informed that
                   the thief has already
                 eloped and taken away with him significant amount of <span className="cash"> cash.</span>
                  After carefully scrutinising the scene and collecting the cues,
                   you go on to trace the thief and catch him down.
                    On contacting the station for <span className="support"> backup support,</span> 
                    you are led down as only you are available at the instant.
</p>
           </div>
         </div>
         <div className="linear_storythree">
           <div  className="linear__run">
             <p> <span className="track"> Tracking</span> him, you reach the train station 
             and see him getting onto the train and <span className="rush"> rush</span> to reach the 
             train in time. The real <span className="challenge"> Challenge</span> to get hold of him begins here...</p>
           </div>
           <div className="linear__car">
           <Lottie options={{ animationData:cop,}} />
          {/* // <Lottie options={{ animationData: "https://assets4.lottiefiles.com/packages/lf20_fzxgbei2.json",}} /> */}
         </div>
         </div>
         
    </div>
    </div>
  )
}

export default CompleStory
