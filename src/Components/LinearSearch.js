import React from "react";
import "./LinearSearch.css";
import image1 from "../Assets/ABCD.jpg";
import image2 from "../Assets/XYZ.jpg";


function LinearSearch() {
 

 var Weight = new Array(1,2,3,4,5,6,7,8,9,10,11);
for(var i=1; i<Weight.length;i++)
{
  Weight[i] = Math.floor(Math.random()*100)
  while(Weight===0){
    Weight[i] = Math.floor(Math.random()*100)
  }
}
 var Thief = Math.floor(Math.random()*10)
 while(Thief===0){
  Thief= Math.floor(Math.random()*10)
}
 
var ThiefWeight = Weight[Thief];
var PoliceMan = 1;
var clickIndex=0;

while(PoliceMan!=Thief)
{
  function reply_click(clicked_id)
  {
    clickIndex=clicked_id;
  } 
  if(clickIndex===PoliceMan)
  {
    function changeImage(a) {
      document.getElementById("img").src=a.src;
  }
  }
}
console.log(clickIndex);

  return <div className="linearSearch">
    <button id="1" onClick="reply_click(this.id)" className=" drum" >
    <img src={image1}  className="image" onClick="changeImage({image2})" alt="/">

    </img>
    </button>


    <button  id="2" onClick="reply_click(this.id)" className=" drum"> <img src={image1} className="image" alt="/"></img></button>
    <button id="3" onClick="reply_click(this.id)" className=" drum"> <img src={image1} className="image" alt="/"></img></button>
    <button id="4" onClick="reply_click(this.id)" className=" drum"> <img src={image1} className="image" alt="/"></img></button>
    <button id="5" onClick="reply_click(this.id)" className=" drum"> <img src={image1} className="image" alt="/"></img></button>
    <button id="6" onClick="reply_click(this.id)" className=" drum"> <img src={image1} className="image" alt="/"></img></button>
    <button id="7" onClick="reply_click(this.id)" className=" drum"> <img src={image1} className="image" alt="/"></img></button>
    <button id="8" onClick="reply_click(this.id)" className=" drum"> <img src={image1} className="image" alt="/"></img></button>
    <button id="9" onClick="reply_click(this.id)" className=" drum"> <img src={image1} className="image" alt="/"></img></button>
    <button id="10" onClick="reply_click(this.id)" className=" drum">
      <img src={image1} className="image" alt="/"></img>
    </button>
  </div>;
}

export default LinearSearch;
