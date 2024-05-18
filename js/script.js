// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {

  //input
  const dayOfWeek = document.getElementById("day-of-week").innerHTML
  const personAge = parseInt(document.getElementById("person-age").value)
  //process
  if ((dayOfWeek == "Tuesday" || dayOfWeek == "Thursday") || (personAge >= 12 && personAge <= 21)) {
    // Output
    document.getElementById("final-answer").innerHTML =
      "You have a discount at your admission"
  } else {
    document.getElementById("final-answer").innerHTML =
      "You have to pay full admission"
  }
}