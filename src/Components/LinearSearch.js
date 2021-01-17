import React, { Component } from "react";
import "./LinearSearch.css";
import image1 from "../Assets/ABCD.jpg";
import image2 from "../Assets/XYZ.jpg";
import {Button, Algorithmone} from "./OnclickComponent";


function LinearSearch() {
  var Weight = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);
  for (var i = 1; i < Weight.length; i++) {
    Weight[i] = Math.floor(Math.random() * 100)
    while (Weight === 0) {
      Weight[i] = Math.floor(Math.random() * 100)
    }
  }
  var Thief = Math.floor(Math.random() * 10)
  while (Thief === 0) {
    Thief = Math.floor(Math.random() * 10)
  }

  var ThiefWeight = Weight[Thief];
  var PoliceMan = 1;
  var clickIndex = 0;

 

  return(
    <div className="linearSearch">
  <Button />
  
  </div>
  ) ;
}

export default LinearSearch;
