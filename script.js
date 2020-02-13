"use strict";
window.addEventListener("DOMContentLoaded", init);
// Define variable

const input = document.querySelector("#input");
const output = document.querySelector("#output");
const selector = document.querySelector("#selector");
const submit = document.querySelector("#submit");

const arrayOfFunctions = [
  // 1 Make the first character in a name uppercase, and the rest lowercase
  function firstName() {
    workingOutput = workingOutput.toLowerCase();
    workingOutput =
      workingOutput[0].toUpperCase() +
      workingOutput.substring(1, workingOutput.length);
  },

  // 2 Find the first name
  function fullNameOne() {
    workingOutput = workingOutput.substring(0, workingOutput.indexOf(" "));
  },

  // 3 Find the length of the first name
  function fullNameTwo() {
    workingOutput = workingOutput.substring(0, workingOutput.indexOf(" "));
    workingOutput = workingOutput.length;
  },

  // // 4 Find the middle name start and end position, and the middle name itself in a full name string
  function fullNameThree() {
    workingOutput = workingOutput.substring(
      workingOutput.indexOf(" ") + 1,
      workingOutput.lastIndexOf(" ")
    );
    console.log(workingOutput);
    if (workingOutput[0] === " " || workingOutput == "") {
      console.log("if");
      workingOutput = "There is no middle name";
    } else {
      console.log(workingOutput.length);
      workingOutput =
        workingOutput +
        ` : Starts at index ${workingOutput.indexOf(
          " "
        )} and ends at index ${workingOutput.lastIndexOf(" ")}`;
    }
  },

  // // 5 Check if a filename is .png or .jp
  function filename() {
    if (workingOutput.endsWith(".png")) {
      workingOutput = "This is a .png-file";
    } else if (workingOutput.endsWith(".jpg")) {
      workingOutput = "This is a .jpg-file";
    } else {
      workingOutput = "This is not a .png-file or a .jpg-file";
    }
  },

  // // 6 Hide a password with the correct number of *s
  function password() {
    let passLen = workingOutput.length;
    workingOutput = "";
    workingOutput = workingOutput.padStart(passLen, "*");
  },

  // // 7 Make the third character in a name uppercase
  function anyOne() {
    workingOutput = workingOutput.toLowerCase();
    workingOutput =
      workingOutput.substring(0, 2) +
      workingOutput[2].toUpperCase() +
      workingOutput.substring(3, workingOutput.length);
  },

  // // 8 Make a character uppercase, if it follows a space or a hyphen
  function anyTwo() {
    workingOutput = workingOutput.toLowerCase();
    const spaceAndHyphens = [];
    let space;
    let hyphen;

    for (
      space = workingOutput.indexOf(" ");
      space !== -1;
      space = workingOutput.indexOf(" ", space + 1)
    ) {
      spaceAndHyphens.push(space);
    }
    for (
      hyphen = workingOutput.indexOf("-");
      hyphen !== -1;
      hyphen = workingOutput.indexOf("-", hyphen + 1)
    ) {
      spaceAndHyphens.push(hyphen);
    }
    spaceAndHyphens.forEach(capitalizeNext);
    function capitalizeNext(number) {
      workingOutput =
        workingOutput.substring(0, number + 1) +
        workingOutput[number + 1].toUpperCase() +
        workingOutput.substring(number + 2, workingOutput.length);
    }
  }
];

// Read and store input data
let currentInput;
let workingOutput;

// Activate generator button
function init() {
  submit.addEventListener("click", generateOutput);
}

function generateOutput() {
  activateOption();
  writeOutput();
}

// Read selected option
function activateOption() {
  let thisOption = selector.value;
  currentInput = input.value;
  workingOutput = currentInput;
  arrayOfFunctions[thisOption]();
}
// Write result in output box
function writeOutput() {
  output.value = workingOutput;
}
