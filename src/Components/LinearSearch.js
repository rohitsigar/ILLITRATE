import React, { useState } from "react";
import "./LinearSearch.css";
import Card from "./Card";

var Message1 = "Ready to Scratch a Lie! 😜";
var Message2 = "Traverse the array";
var PoliceMan = 1;
var Thief ; 
var b = true;
function trial(){
  var Weight = new Array(1,2,3,4,5,6,7,8,9,10,11);
  for(var i=1; i<Weight.length;i++)
  {
    Weight[i] = Math.floor(Math.random()*100)
    while(Weight==0){
      Weight[i] = Math.floor(Math.random()*100)
    }
  }
   Thief = Math.floor(Math.random()*10)
   while(Thief==0){
    Thief= Math.floor(Math.random()*10)
  }
  var ThiefWeight = Weight[Thief];
}
function LinearSearch() {
const [values,setValues] = useState(0);
// console.log(values);
<<<<<<< HEAD
const [photo1,setPhoto1] = useState("https://github.com/rohitsigar/ILLITRATE/blob/Rohita/src/Assets/Train1.png?raw=true");
const [photo2,setPhoto2] = useState("https://scontent.fdel6-1.fna.fbcdn.net/v/t1.0-9/139941229_102333658518873_3041693399418250157_o.jpg?_nc_cat=108&ccb=2&_nc_sid=730e14&_nc_ohc=9QrThqK6StcAX9JYt55&_nc_ht=scontent.fdel6-1.fna&oh=9d3f923a2eb2e0fb3033237a0ac7e24b&oe=6028DE6A");
const [photo3,setPhoto3] = useState("https://scontent.fdel6-1.fna.fbcdn.net/v/t1.0-9/139449278_102333688518870_1404870796970672459_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=iRKG8z4zL6wAX8GB1II&_nc_ht=scontent.fdel6-1.fna&oh=4360ae608aaff4844df403c013ee461a&oe=6029FC67");
const [photo4,setPhoto4] = useState("https://scontent.fdel6-1.fna.fbcdn.net/v/t1.0-9/139568214_102333681852204_7529496654824637647_o.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=H-WaPE9SiugAX9LCeuE&_nc_ht=scontent.fdel6-1.fna&oh=e1f8103863a1242f96cb4c5dc52f88c5&oe=60275A9D");
const [photo5,setPhoto5] = useState("https://scontent.fdel6-1.fna.fbcdn.net/v/t1.0-9/139948230_102333728518866_1162617909568603775_o.jpg?_nc_cat=104&ccb=2&_nc_sid=730e14&_nc_ohc=EN1Fqn87f70AX8uk4AW&_nc_ht=scontent.fdel6-1.fna&oh=319bdaa08714cd996cafd7cc4727bb98&oe=602A7529");
const [photo6,setPhoto6] = useState("https://scontent.fdel6-1.fna.fbcdn.net/v/t1.0-9/139941229_102333658518873_3041693399418250157_o.jpg?_nc_cat=108&ccb=2&_nc_sid=730e14&_nc_ohc=9QrThqK6StcAX9JYt55&_nc_ht=scontent.fdel6-1.fna&oh=9d3f923a2eb2e0fb3033237a0ac7e24b&oe=6028DE6A");
const [photo7,setPhoto7] = useState("https://scontent.fdel6-1.fna.fbcdn.net/v/t1.0-9/139449278_102333688518870_1404870796970672459_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=iRKG8z4zL6wAX8GB1II&_nc_ht=scontent.fdel6-1.fna&oh=4360ae608aaff4844df403c013ee461a&oe=6029FC67");
const [photo8,setPhoto8] = useState("https://scontent.fdel6-1.fna.fbcdn.net/v/t1.0-9/139568214_102333681852204_7529496654824637647_o.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=H-WaPE9SiugAX9LCeuE&_nc_ht=scontent.fdel6-1.fna&oh=e1f8103863a1242f96cb4c5dc52f88c5&oe=60275A9D");
const [photo9,setPhoto9] = useState("https://scontent.fdel6-1.fna.fbcdn.net/v/t1.0-9/139948230_102333728518866_1162617909568603775_o.jpg?_nc_cat=104&ccb=2&_nc_sid=730e14&_nc_ohc=EN1Fqn87f70AX8uk4AW&_nc_ht=scontent.fdel6-1.fna&oh=319bdaa08714cd996cafd7cc4727bb98&oe=602A7529");
const [photo10,setPhoto10] = useState("https://scontent.fdel6-1.fna.fbcdn.net/v/t1.0-9/139941229_102333658518873_3041693399418250157_o.jpg?_nc_cat=108&ccb=2&_nc_sid=730e14&_nc_ohc=9QrThqK6StcAX9JYt55&_nc_ht=scontent.fdel6-1.fna&oh=9d3f923a2eb2e0fb3033237a0ac7e24b&oe=6028DE6A");
const [photo11,setPhoto11] = useState("https://www.emoji.com/wp-content/uploads/filebase/icons/emoji-icon-glossy-05-05-travel-places-transport-ground-locomotive-variant-cartoon-72dpi-forPersonalUseOnly.png");
=======
const [photo1,setPhoto1] = useState("https://raw.githubusercontent.com/rohitsigar/ILLITRATE/Parul/src/Assets/1%20pasanger.png");
const [photo2,setPhoto2] = useState("https://www.seekpng.com/png/full/212-2126964_rail-transport-train-passenger-car-goods-wagon-caboose.png");
const [photo3,setPhoto3] = useState("https://www.seekpng.com/png/full/212-2126964_rail-transport-train-passenger-car-goods-wagon-caboose.png");
const [photo4,setPhoto4] = useState("https://www.seekpng.com/png/full/212-2126964_rail-transport-train-passenger-car-goods-wagon-caboose.png");
const [photo5,setPhoto5] = useState("https://www.seekpng.com/png/full/212-2126964_rail-transport-train-passenger-car-goods-wagon-caboose.png");
const [photo6,setPhoto6] = useState("https://www.seekpng.com/png/full/212-2126964_rail-transport-train-passenger-car-goods-wagon-caboose.png");
const [photo7,setPhoto7] = useState("https://www.seekpng.com/png/full/212-2126964_rail-transport-train-passenger-car-goods-wagon-caboose.png");
const [photo8,setPhoto8] = useState("https://www.seekpng.com/png/full/212-2126964_rail-transport-train-passenger-car-goods-wagon-caboose.png");
const [photo9,setPhoto9] = useState("https://www.seekpng.com/png/full/212-2126964_rail-transport-train-passenger-car-goods-wagon-caboose.png");
const [photo10,setPhoto10] = useState("https://www.seekpng.com/png/full/212-2126964_rail-transport-train-passenger-car-goods-wagon-caboose.png");
>>>>>>> edee3956bc17d8dfd80ca811187574d567bad952

if(b)
{
  trial();
  b = false;
}
console.log(Thief);
console.log(PoliceMan);
const findId1 =  ()=>{
  if(PoliceMan==1)
  {
    if(Thief==1)
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
      PoliceMan++;
    }
  }
} 
const findId2 =  ()=>{
  if(PoliceMan==2)
  {
    if(Thief==2)
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
      PoliceMan++;
    }
  }
  else{
    console.log("2 box");
    imp();
    Message1 = "Congratulations! You caught the thief 🤩!";
    Message2 = "You found the required number on " + PoliceMan + "rd index of the Compartment";
  }
} 
const findId3 =  ()=>{
if(PoliceMan==3)
  {
    if(Thief==3)
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
    if(Thief==4)
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
    if(Thief==5)
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
    if(Thief==6)
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
    if(Thief==7)
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
    if(trial.Thief==8)
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
    if(Thief==9)
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
    if(Thief==10)
    {
      findTrain91();
      Thief10();
      Message1 = "Congratulations! You caught the thief 🤩!";
      Message2 = "You found the required number on " + PoliceMan + "th index of the Compartment";
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
  setPhoto1("https://www.pinclipart.com/picdir/big/408-4085765_bald-head-old-man-cartoon-transparent-clipart.png");
}
const findTrain11 = ()=>
{
  setPhoto1("https://www.seekpng.com/png/full/212-2126964_rail-transport-train-passenger-car-goods-wagon-caboose.png");
}
const findTrain20 = ()=>
{
  setPhoto2("https://www.clipartmax.com/png/middle/11-113388_angry-woman-cartoon-angry-cartoon-woman.png");
}
const findTrain21 = ()=>
{
  setPhoto2("https://www.seekpng.com/png/full/212-2126964_rail-transport-train-passenger-car-goods-wagon-caboose.png");
}
const findTrain30 = ()=>
{
  setPhoto3("http://clipart-library.com/images/8czKK6jqi.png");
}
const findTrain31 = ()=>
{
  setPhoto3("https://www.seekpng.com/png/full/212-2126964_rail-transport-train-passenger-car-goods-wagon-caboose.png");
}
const findTrain40 = ()=>
{
  setPhoto4("https://scontent.fdel6-1.fna.fbcdn.net/v/t1.0-9/139526022_102333421852230_1219368759427146629_n.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=aoGjSUD9A8wAX_aBDWU&_nc_ht=scontent.fdel6-1.fna&oh=29c6bcefdf625cabee2377df046d0845&oe=60277D3C");
}
const findTrain41 = ()=>
{
  setPhoto4("https://www.seekpng.com/png/full/212-2126964_rail-transport-train-passenger-car-goods-wagon-caboose.png");
}
const findTrain50 = ()=>
{
  setPhoto5("https://i2.wp.com/ceklog.file:///C:/Users/rohit/OneDrive/Desktop/illitrate%20returns/ILLITRATE/src/Assets/Train4.png.com/wp-content/uploads/2013/02/firefox_2018-07-10_07-50-11.png");
}
const findTrain51 = ()=>
{
  setPhoto5("https://www.seekpng.com/png/full/212-2126964_rail-transport-train-passenger-car-goods-wagon-caboose.png");
}
const findTrain60 = ()=>
{
  setPhoto6("http://clipart-library.com/images/8czKK6jqi.png");
}
const findTrain61 = ()=>
{
  setPhoto6("https://www.seekpng.com/png/full/212-2126964_rail-transport-train-passenger-car-goods-wagon-caboose.png");
}
const findTrain70 = ()=>
{
  setPhoto7("https://scontent.fdel6-1.fna.fbcdn.net/v/t1.0-9/139941229_102333658518873_3041693399418250157_o.jpg?_nc_cat=108&ccb=2&_nc_sid=730e14&_nc_ohc=9QrThqK6StcAX9JYt55&_nc_ht=scontent.fdel6-1.fna&oh=9d3f923a2eb2e0fb3033237a0ac7e24b&oe=6028DE6A");
}
const findTrain71 = ()=>
{
  setPhoto7("https://www.seekpng.com/png/full/212-2126964_rail-transport-train-passenger-car-goods-wagon-caboose.png");
}
const findTrain80 = ()=>
{
  setPhoto8("https://scontent.fdel6-1.fna.fbcdn.net/v/t1.0-9/139941229_102333658518873_3041693399418250157_o.jpg?_nc_cat=108&ccb=2&_nc_sid=730e14&_nc_ohc=9QrThqK6StcAX9JYt55&_nc_ht=scontent.fdel6-1.fna&oh=9d3f923a2eb2e0fb3033237a0ac7e24b&oe=6028DE6A");
}
const findTrain81 = ()=>
{
  setPhoto8("https://www.seekpng.com/png/full/212-2126964_rail-transport-train-passenger-car-goods-wagon-caboose.png");
}
const findTrain90 = ()=>
{
  setPhoto9("https://scontent.fdel6-1.fna.fbcdn.net/v/t1.0-9/139941229_102333658518873_3041693399418250157_o.jpg?_nc_cat=108&ccb=2&_nc_sid=730e14&_nc_ohc=9QrThqK6StcAX9JYt55&_nc_ht=scontent.fdel6-1.fna&oh=9d3f923a2eb2e0fb3033237a0ac7e24b&oe=6028DE6A");
}
const findTrain91 = ()=>
{
  setPhoto9("https://www.seekpng.com/png/full/212-2126964_rail-transport-train-passenger-car-goods-wagon-caboose.png");
}
const findTrain100 = ()=>
{
  setPhoto10("https://scontent.fdel6-1.fna.fbcdn.net/v/t1.0-9/139941229_102333658518873_3041693399418250157_o.jpg?_nc_cat=108&ccb=2&_nc_sid=730e14&_nc_ohc=9QrThqK6StcAX9JYt55&_nc_ht=scontent.fdel6-1.fna&oh=9d3f923a2eb2e0fb3033237a0ac7e24b&oe=6028DE6A");
}
const findTrain101 = ()=>
{
  setPhoto10("https://www.seekpng.com/png/full/212-2126964_rail-transport-train-passenger-car-goods-wagon-caboose.png");
}
const Thief1 = ()=>
{
  setPhoto1("https://scontent.fdel6-1.fna.fbcdn.net/v/t1.0-9/139854173_102333615185544_6350016762095232884_o.jpg?_nc_cat=100&ccb=2&_nc_sid=730e14&_nc_ohc=9JCqb7fCD38AX_m-dXo&_nc_ht=scontent.fdel6-1.fna&oh=85e4876ebe0a76ddfee42b855a1f2b36&oe=60286C66");
}
const Thief2 = ()=>
{
  setPhoto2("https://scontent.fdel6-1.fna.fbcdn.net/v/t1.0-9/139854173_102333615185544_6350016762095232884_o.jpg?_nc_cat=100&ccb=2&_nc_sid=730e14&_nc_ohc=9JCqb7fCD38AX_m-dXo&_nc_ht=scontent.fdel6-1.fna&oh=85e4876ebe0a76ddfee42b855a1f2b36&oe=60286C66");
}
const Thief3 = ()=>
{
  setPhoto3("https://scontent.fdel6-1.fna.fbcdn.net/v/t1.0-9/139854173_102333615185544_6350016762095232884_o.jpg?_nc_cat=100&ccb=2&_nc_sid=730e14&_nc_ohc=9JCqb7fCD38AX_m-dXo&_nc_ht=scontent.fdel6-1.fna&oh=85e4876ebe0a76ddfee42b855a1f2b36&oe=60286C66");
}
const Thief4 = ()=>
{
  setPhoto4("https://scontent.fdel6-1.fna.fbcdn.net/v/t1.0-9/139854173_102333615185544_6350016762095232884_o.jpg?_nc_cat=100&ccb=2&_nc_sid=730e14&_nc_ohc=9JCqb7fCD38AX_m-dXo&_nc_ht=scontent.fdel6-1.fna&oh=85e4876ebe0a76ddfee42b855a1f2b36&oe=60286C66");
}
const Thief5 = ()=>
{
  setPhoto5("https://scontent.fdel6-1.fna.fbcdn.net/v/t1.0-9/139854173_102333615185544_6350016762095232884_o.jpg?_nc_cat=100&ccb=2&_nc_sid=730e14&_nc_ohc=9JCqb7fCD38AX_m-dXo&_nc_ht=scontent.fdel6-1.fna&oh=85e4876ebe0a76ddfee42b855a1f2b36&oe=60286C66");
}
const Thief6 = ()=>
{
  setPhoto6("https://scontent.fdel6-1.fna.fbcdn.net/v/t1.0-9/139854173_102333615185544_6350016762095232884_o.jpg?_nc_cat=100&ccb=2&_nc_sid=730e14&_nc_ohc=9JCqb7fCD38AX_m-dXo&_nc_ht=scontent.fdel6-1.fna&oh=85e4876ebe0a76ddfee42b855a1f2b36&oe=60286C66");
}
const Thief7 = ()=>
{
  setPhoto7("https://scontent.fdel6-1.fna.fbcdn.net/v/t1.0-9/139854173_102333615185544_6350016762095232884_o.jpg?_nc_cat=100&ccb=2&_nc_sid=730e14&_nc_ohc=9JCqb7fCD38AX_m-dXo&_nc_ht=scontent.fdel6-1.fna&oh=85e4876ebe0a76ddfee42b855a1f2b36&oe=60286C66");
}
const Thief8 = ()=>
{
  setPhoto8("https://scontent.fdel6-1.fna.fbcdn.net/v/t1.0-9/139854173_102333615185544_6350016762095232884_o.jpg?_nc_cat=100&ccb=2&_nc_sid=730e14&_nc_ohc=9JCqb7fCD38AX_m-dXo&_nc_ht=scontent.fdel6-1.fna&oh=85e4876ebe0a76ddfee42b855a1f2b36&oe=60286C66");
}
const Thief9 = ()=>
{
  setPhoto9("https://scontent.fdel6-1.fna.fbcdn.net/v/t1.0-9/139854173_102333615185544_6350016762095232884_o.jpg?_nc_cat=100&ccb=2&_nc_sid=730e14&_nc_ohc=9JCqb7fCD38AX_m-dXo&_nc_ht=scontent.fdel6-1.fna&oh=85e4876ebe0a76ddfee42b855a1f2b36&oe=60286C66");
}
const Thief10 = ()=>
{
  setPhoto10("https://scontent.fdel6-1.fna.fbcdn.net/v/t1.0-9/139854173_102333615185544_6350016762095232884_o.jpg?_nc_cat=100&ccb=2&_nc_sid=730e14&_nc_ohc=9JCqb7fCD38AX_m-dXo&_nc_ht=scontent.fdel6-1.fna&oh=85e4876ebe0a76ddfee42b855a1f2b36&oe=60286C66");
}
const imp = ()=>
{
  if(photo11=="https://www.emoji.com/wp-content/uploads/filebase/icons/emoji-icon-glossy-05-05-travel-places-transport-ground-locomotive-variant-cartoon-72dpi-forPersonalUseOnly.png")
  {
    setPhoto11("https://bit.ly/3ijfzR8")
  }
  else
  {
    setPhoto11("https://www.emoji.com/wp-content/uploads/filebase/icons/emoji-icon-glossy-05-05-travel-places-transport-ground-locomotive-variant-cartoon-72dpi-forPersonalUseOnly.png")
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

  <img src = {photo11} alt = "/"></img>

  </div>
  
    <button id="1" onClick ={findId1} className=" drum" >
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
