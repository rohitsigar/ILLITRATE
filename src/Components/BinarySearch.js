import React, { useRef, useState } from "react";
import "./BinarySearch.css";
import Card from "./Card";
var Weight = new Array(1,2,3,4,5,6,7,8,9,10,11);
var Message3 = "No. of Beads";
var Message1 = "Ready to Scratch a Lie! 😜";
var Message2 = "Traverse the array";
var Message4 = "";
var Thief ;
var left = 1;
var right = 10;
var b = true;
var PoliceMan = 1;
function trial(){
  for(var i=1; i<Weight.length;i++)
  {
    Weight[i] = Math.floor(Math.random()*100)
    while(Weight==0){
      Weight[i] = Math.floor(Math.random()*100)
    }
  }
  Weight.sort(function(a, b){return a - b});
  for(var i=1;i<11;i++)
  {
    console.log(Weight[i]);
  }
   Thief = Math.floor(Math.random()*10)
   while(Thief==0){
    Thief= Math.floor(Math.random()*10)
  }
  var ThiefWeight = Weight[Thief];
}
function LinearSearch() {
const [values,setValues] = useState(0);

const [photo1,setPhoto1] = useState("https://github.com/rohitsigar/ILLITRATE/blob/master/src/Assets/BoxDark1.png?raw=true");
const [photo2,setPhoto2] = useState("https://github.com/rohitsigar/ILLITRATE/blob/master/src/Assets/BoxDark1.png?raw=true");
const [photo3,setPhoto3] = useState("https://github.com/rohitsigar/ILLITRATE/blob/master/src/Assets/BoxDark1.png?raw=true");
const [photo4,setPhoto4] = useState("https://github.com/rohitsigar/ILLITRATE/blob/master/src/Assets/BoxDark1.png?raw=true");
const [photo5,setPhoto5] = useState("https://github.com/rohitsigar/ILLITRATE/blob/master/src/Assets/BoxDark1.png?raw=true");
const [photo6,setPhoto6] = useState("https://github.com/rohitsigar/ILLITRATE/blob/master/src/Assets/BoxDark1.png?raw=true");
const [photo7,setPhoto7] = useState("https://github.com/rohitsigar/ILLITRATE/blob/master/src/Assets/BoxDark1.png?raw=true");
const [photo8,setPhoto8] = useState("https://github.com/rohitsigar/ILLITRATE/blob/master/src/Assets/BoxDark1.png?raw=true");
const [photo9,setPhoto9] = useState("https://github.com/rohitsigar/ILLITRATE/blob/master/src/Assets/BoxDark1.png?raw=true");
const [photo10,setPhoto10] = useState("https://github.com/rohitsigar/ILLITRATE/blob/master/src/Assets/BoxDark1.png?raw=true");
const [photo11,setPhoto11] = useState("https://github.com/rohitsigar/ILLITRATE/blob/master/src/Assets/BoxDark1.png?raw=true");

PoliceMan = Math.floor(left + (right - left)/2);
//1-l or r- 10
for(var i=0;i<left;i++)
{
   //i
}
for(var i=10;i>right;i--)
{
  //i
}

if(b)
{
  trial();
  b = false;
  Message4 = "No. of beads in Precious jwellery: " + Weight[Thief]; 
}
console.log(Thief);
console.log(PoliceMan);
const findId1 =  ()=>{
  if(PoliceMan==1)
  {
    if(Weight[Thief]==Weight[1])
    {
      Thief1();
      findTrain21();
      Message1 = "Congratulations! You save the robary 🤩!";
      Message2 = "You found the precious jwellery on " + PoliceMan + "st index of the Box";
      Message3 = "Thief arrested!!"

     }
    else
    {
      findTrain10();
      findTrain21();
       Message1 = "Oops!!🙊 this is not the box you are lookin' for.";
      Message2 = "Box[" + PoliceMan + "] != Box of precious beads";
      Message3 = "No. of Beads in currentBox: " + Weight[1] ;
      if(Weight[Thief]>Weight[1])
      {
        left = PoliceMan+1;
      }
      else
      {
         right = PoliceMan - 1;
      }
    }
  }
  else
  {
    imp();
    Message1 = "This is not the optimal way to reach the Target";
    Message2 = " Binary Search : Works on Sorted Array : Works on Principle of Divide and Conquer";
    console.log("3 box");
  }
} 
const findId2 =  ()=>{
  if(PoliceMan==2)
  {
    if(Weight[Thief]==Weight[2])
    {
      Thief2();
      findTrain51();
      Message1 = "Congratulations! You save the robary 🤩!";
      Message2 = "You found the precious jwellery on " + PoliceMan + "nd index of the Box";
      Message3 = "Thief arrested!!"
    }
    else
    {
      findTrain51();
      findTrain20();
       Message1 = "Oops!!🙊 this is not the box you are lookin' for.";
      Message2 = "Box[" + PoliceMan + "] != Box of precious beads";
      Message3 = "No. of Beads in currentBox: " + Weight[2] ;
      if(Weight[Thief]>Weight[2])
      {
        left = PoliceMan+1;
      }
      else
      {
         right = PoliceMan - 1;
      }
    }
  }
  else{
        imp();
    Message1 ="This is not the optimal way to reach the Target";
    Message2 = " Binary Search : Works on Sorted Array : Works on Principle of Divide and Conquer";
    console.log("3 box");
  }
} 
const findId3 =  ()=>{
if(PoliceMan==3)
  {
    if(Weight[Thief]==Weight[3])
    {
      Thief3();
      findTrain21();
      Message1 = "Congratulations! You save the robary 🤩!";
      Message2 = "You found the precious jwellery on " + PoliceMan + "rd index of the Box";
      Message3 = "Thief arrested!!"
    }
    else
    {
      findTrain21();
      findTrain30();
       Message1 = "Oops!!🙊 this is not the box you are lookin' for.";
      Message2 = "Box[" + PoliceMan + "] != Box of precious beads";
      Message3 =  "No. of Beads in currentBox: " + Weight[3] ;
      if(Weight[Thief]>Weight[3])
      {
        left = PoliceMan+1;
      }
      else
      {
         right = PoliceMan - 1;
      }
    }
  }
  else{
    imp();
    Message1 ="This is not the optimal way to reach the Target";
    Message2 = " Binary Search : Works on Sorted Array : Works on Principle of Divide and Conquer";
    console.log("3 box");
  }
} 
const findId4 =  ()=>{
if(PoliceMan==4)
  {
    if(Weight[Thief]==Weight[4])
    {
      Thief4();
      findTrain31();
      Message1 = "Congratulations! You save the robary 🤩!";
      Message2 = "You found the precious jwellery on " + PoliceMan + "th index of the Box";
      Message3 = "Thief arrested!!"
    }
    else
    {
      findTrain31();
      findTrain40();
       Message1 = "Oops!!🙊 this is not the box you are lookin' for.";
      Message2 = "Box[" + PoliceMan + "] != Box of precious beads";
      Message3 =  "No. of Beads in currentBox: " + Weight[4] ;
      if(Weight[Thief]>Weight[4])
      {
        left = PoliceMan+1;
      }
      else
      {
         right = PoliceMan - 1;
      }
    }
  }
  else{
    imp();
    Message1 ="This is not the optimal way to reach the Target";
    Message2 = " Binary Search : Works on Sorted Array : Works on Principle of Divide and Conquer";
    console.log("4 box");
  }
} 
const findId5 =  ()=>{
if(PoliceMan==5)
  {
    if(Weight[Thief]==Weight[5])
    {
      Thief5();
      Message1 = "Congratulations! You save the robary 🤩!";
      Message2 = "You found the precious jwellery on " + PoliceMan + "th index of the Box";
      Message3 = "Thief arrested!!"
    }
    else
    {
      findTrain50();
       Message1 = "Oops!!🙊 this is not the box you are lookin' for.";
      Message2 = "Box[" + PoliceMan + "] != Box of precious beads";
      Message3 =  "No. of Beads in currentBox: " + Weight[5] ;
      if(Weight[Thief]>Weight[5])
      {
        left = PoliceMan+1;
      }
      else
      {
         right = PoliceMan - 1;
      }

    }
  }
  else{
    imp();
    Message1 ="This is not the optimal way to reach the Target";
    Message2 = " Binary Search : Works on Sorted Array : Works on Principle of Divide and Conquer";
    console.log("5 box");
  }
} 
const findId6 =  ()=>{
if(PoliceMan==6)
  {
    if(Weight[Thief]==Weight[6])
    {
      Thief6();
      findTrain81();
      Message1 = "Congratulations! You save the robary 🤩!";
      Message2 = "You found the precious jwellery on " + PoliceMan + "th index of the Box";
      Message3 = "Thief arrested!!"
    }
    else
    {
      findTrain81();
      findTrain60();
       Message1 = "Oops!!🙊 this is not the box you are lookin' for.";
      Message2 = "Box[" + PoliceMan + "] != Box of precious beads";
      Message3 =  "No. of Beads in currentBox: " + Weight[6] ;
      if(Weight[Thief]>Weight[6])
      {
        left = PoliceMan+1;
      }
      else
      {
         right = PoliceMan - 1;
      }
    }
  }
  else{
    imp();
    Message1 ="This is not the optimal way to reach the Target";
    Message2 = " Binary Search : Works on Sorted Array : Works on Principle of Divide and Conquer";
    console.log("6 box");
  }
} 
const findId7 =  ()=>{
if(PoliceMan==7)
  {
    if(Weight[Thief]==Weight[7])
    {
      Thief7();
      findTrain61();
      Message1 = "Congratulations! You save the robary 🤩!";
      Message2 = "You found the precious jwellery on " + PoliceMan + "th index of the Box";
      Message3 = "Thief arrested!!"
    }
    else
    {
      findTrain61();
      findTrain70();
       Message1 = "Oops!!🙊 this is not the box you are lookin' for.";
      Message2 = "Box[" + PoliceMan + "] != Box of precious beads";
      Message3 =  "No. of Beads in currentBox: " + Weight[7] ;
      if(Weight[Thief]>Weight[7])
      {
        left = PoliceMan+1;
      }
      else
      {
         right = PoliceMan - 1;
      }
    }
  }
  else{
    imp();
    Message1 ="This is not the optimal way to reach the Target";
    Message2 = " Binary Search : Works on Sorted Array : Works on Principle of Divide and Conquer";
    console.log("7 box");
  }
} 

const findId8 =  ()=>{
if(PoliceMan==8)
  {
    if(Weight[Thief]==Weight[8])
    {
      Thief8();
      findTrain51();
      Message1 = "Congratulations! You save the robary 🤩!";
      Message2 = "You found the precious jwellery on " + PoliceMan + "th index of the Box";
      Message3 = "Thief arrested!!"
    }
    else
    {
      findTrain51();
      findTrain80();
       Message1 = "Oops!!🙊 this is not the box you are lookin' for.";
      Message2 = "Box[" + PoliceMan + "] != Box of precious beads";
      Message3 = "No. of Beads in currentBox: " + Weight[8] ;
      if(Weight[Thief]>Weight[8])
      {
        left = PoliceMan+1;
      }
      else
      {
         right = PoliceMan - 1;
      }
    }
  }
  else{
    imp();
    Message1 ="This is not the optimal way to reach the Target";
    Message2 = " Binary Search : Works on Sorted Array : Works on Principle of Divide and Conquer";
    console.log("8 box");
  }
}
const findId9 =  ()=>{
  if(PoliceMan==9)
  {
    if(Weight[Thief]==Weight[9])
    {
      findTrain81();
      Thief9();
      Message1 = "Congratulations! You save the robary 🤩!";
      Message2 = "You found the precious jwellery on " + PoliceMan + "th index of the Box";
      Message3 = "Thief arrested!!"
    }
    else
    {
      findTrain81();
      findTrain90();
       Message1 = "Oops!!🙊 this is not the box you are lookin' for.";
      Message2 = "Box[" + PoliceMan + "] != Box of precious beads";
      Message3 =  "No. of Beads in currentBox: " + Weight[9] ;
      if(Weight[Thief]>Weight[9])
      {
        left = PoliceMan+1;
      }
      else
      {
         right = PoliceMan - 1;
      }
    }
  }
  else{
    imp();
    Message1 ="This is not the optimal way to reach the Target";
    Message2 = " Binary Search : Works on Sorted Array : Works on Principle of Divide and Conquer";
    console.log("9 box");
  }
} 
const findId10 =  ()=>{
if(PoliceMan==10)
  {
    if(Weight[Thief]==Weight[10])
    {
      findTrain91();
      Thief10();
      Message1 = "Congratulations! You save the robary 🤩!";
      Message2 = "You found the precious jwellery on " + PoliceMan + "th index of the Box";
      Message3 = "Thief arrested!!"
    }
    else
    {
      findTrain91();
      findTrain100();
       Message1 = "Oops!!🙊 this is not the box you are lookin' for.";
      Message2 = "Box[" + PoliceMan + "] != Box of precious beads";
      Message3 = "No. of Beads in currentBox: " + Weight[10] ;
      if(Weight[Thief]>Weight[10])
      {
        left = PoliceMan+1;
      }
      else
      {
         right = PoliceMan - 1;
      }
    }
  }
  else{
    imp();
    Message1 ="This is not the optimal way to reach the Target";
    Message2 = " Binary Search : Works on Sorted Array : Works on Principle of Divide and Conquer";
    console.log("10 box");
  }
} 
const findTrain10 = ()=>
{
  setPhoto1("https://github.com/rohitsigar/ILLITRATE/blob/master/src/Assets/Bead1.png?raw=true");
}
const findTrain11 = ()=>
{
  setPhoto1("https://github.com/rohitsigar/ILLITRATE/blob/master/src/Assets/Box.png?raw=true");
}
const findTrain20 = ()=>
{
  setPhoto2("https://github.com/rohitsigar/ILLITRATE/blob/master/src/Assets/Bead2.png?raw=true");
}
const findTrain21 = ()=>
{
  setPhoto2("https://github.com/rohitsigar/ILLITRATE/blob/master/src/Assets/Box.png?raw=true");
}
const findTrain30 = ()=>
{
  setPhoto3("https://github.com/rohitsigar/ILLITRATE/blob/master/src/Assets/Bead3.png?raw=true");
}
const findTrain31 = ()=>
{
  setPhoto3("https://github.com/rohitsigar/ILLITRATE/blob/master/src/Assets/Box.png?raw=true");
}
const findTrain40 = ()=>
{
  setPhoto4("https://github.com/rohitsigar/ILLITRATE/blob/master/src/Assets/Bead4.png?raw=true");
}
const findTrain41 = ()=>
{
  setPhoto4("https://github.com/rohitsigar/ILLITRATE/blob/master/src/Assets/Box.png?raw=true");
}
const findTrain50 = ()=>
{
  setPhoto5("https://github.com/rohitsigar/ILLITRATE/blob/master/src/Assets/Bead1.png?raw=true");
}
const findTrain51 = ()=>
{
  setPhoto5("https://github.com/rohitsigar/ILLITRATE/blob/master/src/Assets/Box.png?raw=true");
}
const findTrain60 = ()=>
{
  setPhoto6("https://github.com/rohitsigar/ILLITRATE/blob/master/src/Assets/Bead2.png?raw=true");
}
const findTrain61 = ()=>
{
  setPhoto6("https://github.com/rohitsigar/ILLITRATE/blob/master/src/Assets/Box.png?raw=true");
}
const findTrain70 = ()=>
{
  setPhoto7("https://github.com/rohitsigar/ILLITRATE/blob/master/src/Assets/Bead3.png?raw=true");
}
const findTrain71 = ()=>
{
  setPhoto7("https://github.com/rohitsigar/ILLITRATE/blob/master/src/Assets/Box.png?raw=true");
}
const findTrain80 = ()=>
{
  setPhoto8("https://github.com/rohitsigar/ILLITRATE/blob/master/src/Assets/Bead1.png?raw=true");
}
const findTrain81 = ()=>
{
  setPhoto8("https://github.com/rohitsigar/ILLITRATE/blob/master/src/Assets/Box.png?raw=true");
}
const findTrain90 = ()=>
{
  setPhoto9("https://github.com/rohitsigar/ILLITRATE/blob/master/src/Assets/Bead4.png?raw=true");
}
const findTrain91 = ()=>
{
  setPhoto9("https://github.com/rohitsigar/ILLITRATE/blob/master/src/Assets/Box.png?raw=true");
}
const findTrain100 = ()=>
{
  setPhoto10("https://github.com/rohitsigar/ILLITRATE/blob/master/src/Assets/Bead4.png?raw=true");
}
const findTrain101 = ()=>
{
  setPhoto10("https://github.com/rohitsigar/ILLITRATE/blob/master/src/Assets/Box.png?raw=true");
}
const Thief1 = ()=>
{
  setPhoto1("https://github.com/rohitsigar/ILLITRATE/blob/master/src/Assets/MainJwel.png?raw=true");
}
const Thief2 = ()=>
{
  setPhoto2("https://github.com/rohitsigar/ILLITRATE/blob/master/src/Assets/MainJwel.png?raw=true");
}
const Thief3 = ()=>
{
  setPhoto3("https://github.com/rohitsigar/ILLITRATE/blob/master/src/Assets/MainJwel.png?raw=true");
}
const Thief4 = ()=>
{
  setPhoto4("https://github.com/rohitsigar/ILLITRATE/blob/master/src/Assets/MainJwel.png?raw=true");
}
const Thief5 = ()=>
{
  setPhoto5("https://github.com/rohitsigar/ILLITRATE/blob/master/src/Assets/MainJwel.png?raw=true");
}
const Thief6 = ()=>
{
  setPhoto6("https://github.com/rohitsigar/ILLITRATE/blob/master/src/Assets/MainJwel.png?raw=true");
}
const Thief7 = ()=>
{
  setPhoto7("https://github.com/rohitsigar/ILLITRATE/blob/master/src/Assets/MainJwel.png?raw=true");
}
const Thief8 = ()=>
{
  setPhoto8("https://github.com/rohitsigar/ILLITRATE/blob/master/src/Assets/MainJwel.png?raw=true");
}
const Thief9 = ()=>
{
  setPhoto9("https://github.com/rohitsigar/ILLITRATE/blob/master/src/Assets/MainJwel.png?raw=true");
}
const Thief10 = ()=>
{
  setPhoto10("https://github.com/rohitsigar/ILLITRATE/blob/master/src/Assets/MainJwel.png?raw=true");
}
const imp = ()=>
{
  if(photo11=="https://github.com/rohitsigar/ILLITRATE/blob/master/src/Assets/BoxDark1.png?raw=true")
  {
    setPhoto11("https://bit.ly/2XNRqc1")
  }
  else
  {
    setPhoto11("https://github.com/rohitsigar/ILLITRATE/blob/master/src/Assets/BoxDark1.png?raw=true")
  }
}
  return <div className="linearSearch">
  <div className="CardCSS">
  <Card 
    message={Message1}
  />
  <Card 
    message={Message2}
  />
    <Card 
    message={Message3}
  />
  <Card 
    message={Message4}
  />

<img className ="Engine" src = {photo11} alt = "/"></img>
  </div>
    <button id="1" onClick ={findId1}  className=" drum" >
    <img id="img"  src = {photo1}  className="image"  alt="/">
    </img>
    </button>
   
    <button  id="2"  onClick ={findId2}  className=" drum"> <img  src={photo2}  className="image" alt="/"></img></button>
    <button id="3" onClick ={findId3}  className=" drum"> <img src={photo3} className="image" alt="/"></img></button>
    <button id="4" onClick ={findId4}  className=" drum"> <img src={photo4} className="image" alt="/"></img></button>
    <button id="5" onClick ={findId5} className=" drum"> <img src={photo5} className="image" alt="/"></img></button>
    <button id="6" onClick ={findId6} className=" drum"> <img src={photo6} className="image" alt="/"></img></button>
    <button id="7" onClick ={findId7} className=" drum"> <img src={photo7} className="image" alt="/"></img></button>
    <button id="8" onClick ={findId8} className=" drum"> <img src={photo8} className="image" alt="/"></img></button>
    <button id="9" onClick ={findId9} className=" drum"> <img src={photo9} className="image" alt="/"></img></button>
    <button id="10" onClick ={findId10} className=" drum">
      <img src={photo10} className="image" alt="/"></img>
    </button>
  

  </div>;

}

export default LinearSearch;