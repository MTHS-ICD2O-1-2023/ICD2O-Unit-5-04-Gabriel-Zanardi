// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict";

function myButtonClicked() {

  //input
  const day = document.getElementById("final-answer").innerHTML

  // Output
  document.getElementById("final-answer").innerHTML =
    "Your cost with no tax is: CAD$" + noTaxCost;
}