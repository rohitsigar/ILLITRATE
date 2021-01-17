import React, { useRef, useState } from "react";
import "./LinearSearch.css";
import Card from "./Card";
var Weight = new Array(1,2,3,4,5,6,7,8,9,10,11);
var Message3 = "Weight";
var Message1 = "Ready to Scratch a Lie! 😜";
var Message2 = "Traverse the array";
var PoliceMan = 1;
var Thief ; 
var b = true;
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

  const commentSection = useRef(null);
  const findId = () => window.scrollTo({
    top: commentSection.current.offSetTop,
    behavior:"smooth"
  });

const [values,setValues] = useState(0);
// console.log(values);
const [photo1,setPhoto1] = useState("https://github.com/rohitsigar/ILLITRATE/blob/Rohita/src/Assets/Train1.png?raw=true");
const [photo2,setPhoto2] = useState("https://github.com/rohitsigar/ILLITRATE/blob/Rohita/src/Assets/Train2.png?raw=true");
const [photo3,setPhoto3] = useState("https://github.com/rohitsigar/ILLITRATE/blob/Rohita/src/Assets/Train1.png?raw=true");
const [photo4,setPhoto4] = useState("https://github.com/rohitsigar/ILLITRATE/blob/Rohita/src/Assets/Train4.png?raw=true");
const [photo5,setPhoto5] = useState("https://github.com/rohitsigar/ILLITRATE/blob/Rohita/src/Assets/Train1.png?raw=true");
const [photo6,setPhoto6] = useState("https://github.com/rohitsigar/ILLITRATE/blob/Rohita/src/Assets/Train2.png?raw=true");
const [photo7,setPhoto7] = useState("https://github.com/rohitsigar/ILLITRATE/blob/Rohita/src/Assets/Train1.png?raw=true");
const [photo8,setPhoto8] = useState("https://github.com/rohitsigar/ILLITRATE/blob/Rohita/src/Assets/Train4.png?raw=true");
const [photo9,setPhoto9] = useState("https://github.com/rohitsigar/ILLITRATE/blob/Rohita/src/Assets/Train1.png?raw=true");
const [photo10,setPhoto10] = useState("https://github.com/rohitsigar/ILLITRATE/blob/Rohita/src/Assets/Train2.png?raw=true");
const [photo11,setPhoto11] = useState("https://github.com/rohitsigar/ILLITRATE/blob/Rohita/src/Assets/engine1.png?raw=true");


if(b)
{
  trial();
  b = false;
}
console.log(Thief);
console.log(PoliceMan);
//Thief=10;
const findId1 =  ()=>{
  if(PoliceMan==1)
  {
    if(Weight[Thief]==Weight[1])
    {
      Thief1();
      Message1 = "Congratulations! You caught the thief 🤩!";
      Message2 = "You found the required number on " + PoliceMan + "st index of the Compartment";

     }
    else
    {
      findTrain10();
       Message1 = "Oops!!🙊 try another compartment";
      Message2 = "Compartment[" + PoliceMan + "] != Weight of the Thief";
      Message3 = "Passenger Weight : " + Weight[1] + "kg";
      PoliceMan++;
    }
  }
} 
const findId2 =  ()=>{
  if(PoliceMan==2)
  {
    if(Weight[Thief]==Weight[2])
    {
      Thief2();
      findTrain11();
      Message1 = "Congratulations! You caught the thief 🤩!";
      Message2 = "You found the required number on " + PoliceMan + "nd index of the Compartment";
    }
    else
    {
      findTrain11();
      findTrain20();
       Message1 = "Oops!!🙊 try another compartment";
      Message2 = "Compartment[" + PoliceMan + "] != Weight of the Thief";
      Message3 = "Passenger Weight : " + Weight[2] + "kg";
      PoliceMan++;
    }
  }
  else{
    console.log("2 box");
    imp();
    Message1 = "PoliceMan is not reached to this Compartment Yet!";
    Message2 = "You found the required number on " + PoliceMan + "rd index of the Compartment";
  }
} 
const findId3 =  ()=>{
if(PoliceMan==3)
  {
    if(Weight[Thief]==Weight[3])
    {
      Thief3();
      findTrain21();
      Message1 = "Congratulations! You caught the thief 🤩!";
      Message2 = "You found the required number on " + PoliceMan + "rd index of the Compartment";
    }
    else
    {
      findTrain21();
      findTrain30();
       Message1 = "Oops!!🙊 try another compartment";
      Message2 = "Compartment[" + PoliceMan + "] != Weight of the Thief";
      Message3 = "Passenger Weight : " + Weight[3] + "kg";
      PoliceMan++;
    }
  }
  else{
    imp();
    Message1 = "PoliceMan is not reached to this Compartment Yet!";
    Message2 = "In Linear Search : Traversing is done Sequentially";
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
      Message1 = "Congratulations! You caught the thief 🤩!";
      Message2 = "You found the required number on " + PoliceMan + "th index of the Compartment";
    }
    else
    {
      findTrain31();
      findTrain40();
       Message1 = "Oops!!🙊 try another compartment";
      Message2 = "Compartment[" + PoliceMan + "] != Weight of the Thief";
      Message3 = "Passenger Weight : " + Weight[4] + "kg";
      PoliceMan++;
    }
  }
  else{
    imp();
    Message1 = "PoliceMan is not reached to this Compartment Yet!";
    Message2 = "In Linear Search : Traversing is done Sequentially";
    console.log("4 box");
  }
} 
const findId5 =  ()=>{
if(PoliceMan==5)
  {
    if(Weight[Thief]==Weight[5])
    {
      findTrain41();
      Thief5();
      Message1 = "Congratulations! You caught the thief 🤩!";
      Message2 = "You found the required number on " + PoliceMan + "th index of the Compartment";
    }
    else
    {
      findTrain41();
      findTrain50();
       Message1 = "Oops!!🙊 try another compartment";
      Message2 = "Compartment[" + PoliceMan + "] != Weight of the Thief";
      Message3 = "Passenger Weight : " + Weight[5] + "kg";
      PoliceMan++;
    }
  }
  else{
    imp();
    Message1 = "PoliceMan is not reached to this Compartment Yet!";
    Message2 = "In Linear Search : Traversing is done Sequentially";
    console.log("5 box");
  }
} 
const findId6 =  ()=>{
if(PoliceMan==6)
  {
    if(Weight[Thief]==Weight[6])
    {
      Thief6();
      findTrain51();
      Message1 = "Congratulations! You caught the thief 🤩!";
      Message2 = "You found the required number on " + PoliceMan + "th index of the Compartment";
    }
    else
    {
      findTrain51();
      findTrain60();
       Message1 = "Oops!!🙊 try another compartment";
      Message2 = "Compartment[" + PoliceMan + "] != Weight of the Thief";
      Message3 = "Passenger Weight : " + Weight[6] + "kg";
      PoliceMan++;
    }
  }
  else{
    imp();
    Message1 = "PoliceMan is not reached to this Compartment Yet!";
    Message2 = "In Linear Search : Traversing is done Sequentially";
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
      Message1 = "Congratulations! You caught the thief 🤩!";
      Message2 = "You found the required number on " + PoliceMan + "th index of the Compartment";
    }
    else
    {
      findTrain61();
      findTrain70();
       Message1 = "Oops!!🙊 try another compartment";
      Message2 = "Compartment[" + PoliceMan + "] != Weight of the Thief";
      Message3 = "Passenger Weight : " + Weight[7] + "kg";
      PoliceMan++;
    }
  }
  else{
    imp();
    Message1 = "PoliceMan is not reached to this Compartment Yet!";
    Message2 = "In Linear Search : Traversing is done Sequentially";
    console.log("7 box");
  }
} 

const findId8 =  ()=>{

    if(PoliceMan==8)
  {
    if(Weight[Thief]==Weight[8])    
    {
      Thief8();
      findTrain71();
      Message1 = "Congratulations! You caught the thief 🤩!";
      Message2 = "You found the required number on " + PoliceMan + "th index of the Compartment";
    }
    else
    {
      findTrain71();
      findTrain80();
       Message1 = "Oops!!🙊 try another compartment";
      Message2 = "Compartment[" + PoliceMan + "] != Weight of the Thief";
      Message3 = "Passenger Weight : " + Weight[8] + "kg";
      PoliceMan++;
    }
  }
  else{
    imp();
    Message1 = "PoliceMan is not reached to this Compartment Yet!";
    Message2 = "In Linear Search : Traversing is done Sequentially";
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
      Message1 = "Congratulations! You caught the thief 🤩!";
      Message2 = "You found the required number on " + PoliceMan + "th index of the Compartment";
    }
    else
    {
      findTrain81();
      findTrain90();
       Message1 = "Oops!!🙊 try another compartment";
      Message2 = "Compartment[" + PoliceMan + "] != Weight of the Thief";
      Message3 = "Passenger Weight : " + Weight[9] + "kg";
      PoliceMan++;
    }
  }
  else{
    imp();
    Message1 = "PoliceMan is not reached to this Compartment Yet!";
    Message2 = "In Linear Search : Traversing is done Sequentially";
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
      Message1 = "Congratulations! You caught the thief 🤩!";
      Message2 = "You found the required number on " + PoliceMan + "th index of the Compartment";
      Message3 = "Passenger Weight : " + Weight[10] + "kg";
    }
    else
    {
      findTrain91();
      findTrain100();
       Message1 = "Oops!!🙊 try another compartment";
      Message2 = "Compartment[" + PoliceMan + "] != Weight of the Thief";
      PoliceMan++;
    }
  }
  else{
    imp();
    Message1 = "PoliceMan is not reached to this Compartment Yet!";
    Message2 = "In Linear Search : Traversing is done Sequentially";
    console.log("10 box");
  }
} 
const findTrain10 = ()=>
{
  setPhoto1("https://github.com/rohitsigar/ILLITRATE/blob/Rohita/src/Assets/1%20pasanger.png?raw=true");
}
const findTrain11 = ()=>
{
  setPhoto1("https://github.com/rohitsigar/ILLITRATE/blob/Rohita/src/Assets/Train1.png?raw=true");
}
const findTrain20 = ()=>
{
  setPhoto2("https://github.com/rohitsigar/ILLITRATE/blob/Rohita/src/Assets/2nd%20pasanger.png?raw=true");
}
const findTrain21 = ()=>
{
  setPhoto2("https://github.com/rohitsigar/ILLITRATE/blob/Rohita/src/Assets/Train2.png?raw=true");
}
const findTrain30 = ()=>
{
  setPhoto3("https://github.com/rohitsigar/ILLITRATE/blob/Rohita/src/Assets/3.png?raw=true");
}
const findTrain31 = ()=>
{
  setPhoto3("https://github.com/rohitsigar/ILLITRATE/blob/Rohita/src/Assets/Train3.png?raw=true");
}
const findTrain40 = ()=>
{
  setPhoto4("https://github.com/rohitsigar/ILLITRATE/blob/Rohita/src/Assets/4th%20pasanger.png?raw=true");
}
const findTrain41 = ()=>
{
  setPhoto4("https://github.com/rohitsigar/ILLITRATE/blob/Rohita/src/Assets/Train4.png?raw=true");
}
const findTrain50 = ()=>
{
  setPhoto5("https://github.com/rohitsigar/ILLITRATE/blob/Rohita/src/Assets/5th%20passenger.png?raw=true");
}
const findTrain51 = ()=>
{
  setPhoto5("https://github.com/rohitsigar/ILLITRATE/blob/Rohita/src/Assets/Train1.png?raw=true");
}
const findTrain60 = ()=>
{
  setPhoto6("https://github.com/rohitsigar/ILLITRATE/blob/Rohita/src/Assets/6.png?raw=true");
}
const findTrain61 = ()=>
{
  setPhoto6("https://github.com/rohitsigar/ILLITRATE/blob/Rohita/src/Assets/Train2.png?raw=true");
}
const findTrain70 = ()=>
{
  setPhoto7("https://github.com/rohitsigar/ILLITRATE/blob/Rohita/src/Assets/7th%20passenger.png?raw=true");
}
const findTrain71 = ()=>
{
  setPhoto7("https://github.com/rohitsigar/ILLITRATE/blob/Rohita/src/Assets/Train3.png?raw=true");
}
const findTrain80 = ()=>
{
  setPhoto8("https://github.com/rohitsigar/ILLITRATE/blob/Rohita/src/Assets/8th%20passenger.png?raw=true");
}
const findTrain81 = ()=>
{
  setPhoto8("https://github.com/rohitsigar/ILLITRATE/blob/Rohita/src/Assets/Train4.png?raw=true");
}
const findTrain90 = ()=>
{
  setPhoto9("https://github.com/rohitsigar/ILLITRATE/blob/Rohita/src/Assets/motu.png?raw=true");
}
const findTrain91 = ()=>
{
  setPhoto9("https://github.com/rohitsigar/ILLITRATE/blob/Rohita/src/Assets/Train1.png?raw=true");
}
const findTrain100 = ()=>
{
  setPhoto10("https://scontent.fdel6-1.fna.fbcdn.net/v/t1.0-9/139941229_102333658518873_3041693399418250157_o.jpg?_nc_cat=108&ccb=2&_nc_sid=730e14&_nc_ohc=9QrThqK6StcAX9JYt55&_nc_ht=scontent.fdel6-1.fna&oh=9d3f923a2eb2e0fb3033237a0ac7e24b&oe=6028DE6A");
}
const findTrain101 = ()=>
{
  setPhoto10("https://github.com/rohitsigar/ILLITRATE/blob/Rohita/src/Assets/Train2.png?raw=true");
}
const Thief1 = ()=>
{
  setPhoto1("https://github.com/rohitsigar/ILLITRATE/blob/Rohita/src/Assets/thief.png?raw=true");
}
const Thief2 = ()=>
{
  setPhoto2("https://github.com/rohitsigar/ILLITRATE/blob/Rohita/src/Assets/thief.png?raw=true");
}
const Thief3 = ()=>
{
  setPhoto3("https://github.com/rohitsigar/ILLITRATE/blob/Rohita/src/Assets/thief.png?raw=true");
}
const Thief4 = ()=>
{
  setPhoto4("https://github.com/rohitsigar/ILLITRATE/blob/Rohita/src/Assets/thief.png?raw=true");
}
const Thief5 = ()=>
{
  setPhoto5("https://github.com/rohitsigar/ILLITRATE/blob/Rohita/src/Assets/thief.png?raw=true");
}
const Thief6 = ()=>
{
  setPhoto6("https://github.com/rohitsigar/ILLITRATE/blob/Rohita/src/Assets/thief.png?raw=true");
}
const Thief7 = ()=>
{
  setPhoto7("https://github.com/rohitsigar/ILLITRATE/blob/Rohita/src/Assets/thief.png?raw=true");
}
const Thief8 = ()=>
{
  setPhoto8("https://github.com/rohitsigar/ILLITRATE/blob/Rohita/src/Assets/thief.png?raw=true");
}
const Thief9 = ()=>
{
  setPhoto9("https://github.com/rohitsigar/ILLITRATE/blob/Rohita/src/Assets/thief.png?raw=true");
}
const Thief10 = ()=>
{
  setPhoto10("https://github.com/rohitsigar/ILLITRATE/blob/Rohita/src/Assets/thief.png?raw=true");
}
const imp = ()=>
{
  if(photo11=="https://github.com/rohitsigar/ILLITRATE/blob/Rohita/src/Assets/engine1.png?raw=true")
  {
    setPhoto11("https://bit.ly/3ijtQxj")
  }
  else
  {
    setPhoto11("https://github.com/rohitsigar/ILLITRATE/blob/Rohita/src/Assets/engine1.png?raw=true")
  }
}
  return <div className="linearSearch">
  <div className="CardCSS">
  <Card 
    message={`Result = ${Message1}`}
  />
  <Card 
    message={`Code Logic = ${Message2}`}
  />
  <Card 
    message={Message3}
  />


  </div>
  <img className ="Engine" src = {photo11} alt = "/"></img>
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
 <div>
   <h1 className="scrollDown" ref={commentSection}>Click On the Compartment To Catch The Thief</h1>
 </div>
  

  </div>;

}

export default LinearSearch;