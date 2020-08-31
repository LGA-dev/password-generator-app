/* 
======================================================
00. Global variables
01. Array variables
02. Checkboxes event listener
03. Password generator event listener
04. Functions
====================================================== 
*/



// *  00. Global variables *

let passwordLength = document.getElementById('number-input');
let allCheckboxes = document.querySelectorAll('input[type=checkbox]');  // contains all checkboxes
let lowercaseCheckbox = document.getElementById('lowercase-checkbox');  // individual checkbox
let uppercaseCheckbox = document.getElementById('uppercase-checkbox');  // individual checkbox
let numbersCheckbox = document.getElementById('numbers-checkbox');      // individual checkbox
let symbolsCheckbox = document.getElementById('symbols-checkbox');      // individual checkbox
let generatePasswordButton = document.getElementById('generate-password-button');
let passwordOutput = document.getElementById('password-output');

// *  00. Global variables *



// *  01. Array variables  *

let activeArray = [];

let lowercaseArray =
  ['a', 'b', 'c', 'd', 'e',
    'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o',
    'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z'];

let uppercaseArray =
  ['A', 'B', 'C', 'D', 'E',
    'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z'];

let numbersArray =
  ['0', '1', '2', '3', '4',
    '5', '6', '7', '8', '9'];

let symbolsArray =
  ['!', '?', '#', '$', '%',
    '&', '/', '(', ')', '=',
    '>', '<', '°', '¬', '|'];

// *  01. Array variables  *



// *  02. Checkboxes event listener  *

// This will check if the checkbox has the active class
//
// If the class exists, then it will remove the 'id-active-checkbox' and 'active-checkbox' classes
//
// Else, it will add the 'id-active-checkbox' and 'active-checkbox' classes
//
// 'id-active-checkbox' is used to give each checkbox an id
// this way they can trigger the correct individual array in JS
//
// 'active-checkbox' is used to change the background color of the checkbox with CSS
// this way you can tell if they are active or inactive

// Lowercase checkbox
lowercaseCheckbox.addEventListener('click', function () {
  if (lowercaseCheckbox.classList.contains('lowercase-active-checkbox')) {
    lowercaseCheckbox.classList.remove('lowercase-active-checkbox');
    lowercaseCheckbox.classList.remove('active-checkbox');
    console.log('removed class from lowercaseCheckbox');
  } else {
    lowercaseCheckbox.classList.add('lowercase-active-checkbox');
    lowercaseCheckbox.classList.add('active-checkbox');
    console.log('added class to lowercaseCheckbox');
  }
})

// Uppercase checkbox
uppercaseCheckbox.addEventListener('click', function () {
  if (uppercaseCheckbox.classList.contains('uppercase-active-checkbox')) {
    uppercaseCheckbox.classList.remove('uppercase-active-checkbox');
    uppercaseCheckbox.classList.remove('active-checkbox');
    console.log('removed class from uppercaseCheckbox');
  } else {
    uppercaseCheckbox.classList.add('uppercase-active-checkbox');
    uppercaseCheckbox.classList.add('active-checkbox');
    console.log('added class to uppercaseCheckbox');
  }
})

// Numbers checkbox
numbersCheckbox.addEventListener('click', function () {
  if (numbersCheckbox.classList.contains('numbers-active-checkbox')) {
    numbersCheckbox.classList.remove('numbers-active-checkbox');
    numbersCheckbox.classList.remove('active-checkbox');
    console.log('removed class from numbersCheckbox');
  } else {
    numbersCheckbox.classList.add('numbers-active-checkbox');
    numbersCheckbox.classList.add('active-checkbox');
    console.log('added class to numbersCheckbox');
  }
})

// Symbols checkbox
symbolsCheckbox.addEventListener('click', function () {
  if (symbolsCheckbox.classList.contains('symbols-active-checkbox')) {
    symbolsCheckbox.classList.remove('symbols-active-checkbox');
    symbolsCheckbox.classList.remove('active-checkbox');
    console.log('removed class from symbolsCheckbox');
  } else {
    symbolsCheckbox.classList.add('symbols-active-checkbox');
    symbolsCheckbox.classList.add('active-checkbox');
    console.log('added class to symbolsCheckbox');
  }
})

// *  02. Checkboxes event listener  *



// *  03. Password generator event listener  *

generatePasswordButton.addEventListener('click', function name() {

  // Delete all the current items in the array
  activeArray = [];
  // Add all active class items inside the array
  buildActiveArray();

  // Array variable that contains all the random generated characters
  let passwordArray = [];
  for (i = 0; i < passwordLength.value; i++) {
    // generate random number based on allArrays length
    let generateRandomNumber = Math.floor(Math.random() * activeArray.length);
    // selects a random element in allArrays
    // and store it on randomCharacter
    let randomCharacter = activeArray[generateRandomNumber];
    // push the random element inside passwordArray
    passwordArray.push(randomCharacter);
    // display the contents of passwordArray without commas
    passwordOutput.innerHTML = passwordArray.join('');
  }

  // If the array is empty, give a warning
  if (activeArray == 0) {
    passwordOutput.innerHTML = 'Check any of the boxes below to generate your password';
    textBuzzAnimation();
  }

  if (passwordLength.value == "") {
    passwordOutput.innerHTML = 'Enter a value in the password length input';
    textBuzzAnimation();
  } else if (passwordLength.value == 0 || passwordLength.value > 50) {
    passwordOutput.innerHTML = 'Enter a number higher than 0 and lower than 50';
    textBuzzAnimation();
  }
  console.log(passwordLength.value);

  // Execute function that changes the color on click
  changeColorOnClick();
})

// *  03. Password generator event listener  *



// *  04. Functions  *

// Function that add items to [activeArray]

function buildActiveArray() {
  // Check every item inside allCheckboxes variable
  for (let i = 0; i < allCheckboxes.length; i++) {
    // Store the current item inside a variable
    let individualCheckbox = allCheckboxes[i];

    // If the item contains the lowercase-active-checkbox class
    if (individualCheckbox.classList.contains('lowercase-active-checkbox')) {
      console.log(individualCheckbox.id + ' has an active class');
      // Add the lowercaseArray to activeArray
      activeArray.push.apply(activeArray, lowercaseArray);
      console.log('added items to array');
    }
    // If the item contains the uppercase-active-checkbox class
    else if (individualCheckbox.classList.contains('uppercase-active-checkbox')) {
      console.log(individualCheckbox.id + ' has an active class');
      // Add the uppercaseArray to activeArray
      activeArray.push.apply(activeArray, uppercaseArray);
      console.log('added items to array');
    }
    // If the item contains the numbers-active-checkbox class
    else if (individualCheckbox.classList.contains('numbers-active-checkbox')) {
      console.log(individualCheckbox.id + ' has an active class');
      // Add the numbersArray to activeArray
      activeArray.push.apply(activeArray, numbersArray);
      console.log('added items to array');
    }
    // If the item contains the symbols-active-checkbox class
    else if (individualCheckbox.classList.contains('symbols-active-checkbox')) {
      console.log(individualCheckbox.id + ' has an active class');
      // Add the symbolsArray to activeArray
      activeArray.push.apply(activeArray, symbolsArray);
      console.log('added items to array');
    }
  }
  console.log('active array items are [' + activeArray + ']');
  console.log('___________________________________');
}

// Function that adds and removes the buzz out animation

function textBuzzAnimation() {
  // Adds buzz animation to the text
  passwordOutput.classList.add('buzz-out');
  // Removes the animation after 1.1 secs
  setTimeout(removeClass, 1000);
  function removeClass() {
    passwordOutput.classList.remove('buzz-out');
  }
}

// Function that adds and removes the click animation

function changeColorOnClick() {
  // Adds the animation
  generatePasswordButton.classList.add('clickAnimation');
  // Removes the animation after 0.4 secs
  setTimeout(removeClass, 400);
  function removeClass() {
    generatePasswordButton.classList.remove('clickAnimation');
  }
}

// Function that copies current password output to clipboard

function copyText() {
  let text = passwordOutput.innerText;
  navigator.clipboard.writeText(text);
}

// *  04. Functions  *
