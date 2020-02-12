"use strict";
// Define variable

const input = document.querySelector("#input");
const output = document.querySelector("#output");
const selector = document.querySelector("#selector");

// Read and store input data
let currentInput;
let workingOutput;
console.log(currentInput);

// Read selected option
selector.addEventListener("change", activateOption);

function activateOption() {
  let thisOption = this.value;
  currentInput = input.value;
  workingOutput = currentInput;
  console.log(thisOption);

  if (thisOption == "firstname") {
    firstName();
  }

  if (thisOption == "fullname1") {
    fullNameOne();
  }

  if (thisOption == "fullname2") {
    fullNameTwo();
  }

  if (thisOption == "fullname3") {
    fullNameThree();
  }

  if (thisOption == "filename") {
    filename();
  }

  if (thisOption == "password") {
    password();
  }

  if (thisOption == "any1") {
    anyOne();
  }

  if (thisOption == "any2") {
    anyTwo();
  }
}

// 1 Make the first character in a name uppercase, and the rest lowercase
function firstName() {
  workingOutput = workingOutput.toLowerCase();
  workingOutput =
    workingOutput[0].toUpperCase() +
    workingOutput.substring(1, workingOutput.length);
  writeOutput();
}

// 2 Find the first name
function fullNameOne() {
  workingOutput = workingOutput.substring(0, workingOutput.indexOf(" "));
  writeOutput();
}

// 3 Find the length of the first name
function fullNameTwo() {
  workingOutput = workingOutput.substring(0, workingOutput.indexOf(" "));
  workingOutput = workingOutput.length;
  writeOutput();
}

// // 4 Find the middle name start and end position, and the middle name itself in a full name string
function fullNameThree() {
  workingOutput =
    workingOutput.substring(
      workingOutput.indexOf(" ") + 1,
      workingOutput.lastIndexOf(" ")
    ) +
    ` : Starts at index ${workingOutput.indexOf(
      " "
    )} and ends at index ${workingOutput.lastIndexOf(" ")}`;
  writeOutput();
}

// // 5 Check if a filename is .png or .jp
function filename() {
  if (workingOutput.endsWith(".png")) {
    workingOutput = "This is a .png-file";
    writeOutput();
  } else if (workingOutput.endsWith(".jpg")) {
    workingOutput = "This is a .jpg-file";
    writeOutput();
  } else {
    workingOutput = "This is not a .png-file or a .jpg-file";
    writeOutput();
  }
}

// // 6 Hide a password with the correct number of *s
function password() {
  let passLen = workingOutput.length;
  workingOutput = "";
  workingOutput = workingOutput.padStart(passLen, "*");
  writeOutput();
}

// // 7 Make the third character in a name uppercase
function anyOne() {
  workingOutput = workingOutput.toLowerCase();
  workingOutput =
    workingOutput.substring(0, 2) +
    workingOutput[2].toUpperCase() +
    workingOutput.substring(3, workingOutput.length);
  writeOutput();
}

// // 8 Make a character uppercase, if it follows a space or a hyphen
function anyTwo() {
  workingOutput = workingOutput.toLowerCase();
  const spaceAndHyphens = [];
  let space = workingOutput.indexOf(" ");
  let spaceCount = 0;
  let hyphen = workingOutput.indexOf("-");
  let hyphenCount = 0;
  do {
    spaceCount++;
    spaceAndHyphens.push(space);
    space = workingOutput.indexOf(" ", space + 1);
    console.log(space);
    console.log(spaceAndHyphens);
  } while (space !== -1);
  do {
    hyphenCount++;
    spaceAndHyphens.push(hyphen);
    hyphen = workingOutput.indexOf("-", hyphen + 1);
    console.log(hyphen);
    console.log(spaceAndHyphens);
  } while (hyphen !== -1);
  spaceAndHyphens.forEach(capitalizeNext);
  function capitalizeNext(number) {
    workingOutput =
      workingOutput.substring(0, number + 1) +
      workingOutput[number + 1].toUpperCase() +
      workingOutput.substring(number + 2, workingOutput.length);
    writeOutput();
  }
}

// Write result in output box
function writeOutput() {
  output.value = workingOutput;
}
