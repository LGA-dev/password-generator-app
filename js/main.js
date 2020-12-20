/* 
======================================================
00. Global constants
01. Array variables and constants
02. Checkboxes click event listener
03. Active array builder
04. Password generator event listener 
05. Other functions
====================================================== 
*/

// ****  00. Global constants ****

const passwordLengthInput = document.getElementById('password-length-input');
const allCheckboxes = document.querySelectorAll('input[type=checkbox]');  // contains all checkboxes
const lowercaseCheckbox = document.getElementById('lowercase-checkbox');  // individual checkbox
const uppercaseCheckbox = document.getElementById('uppercase-checkbox');  // individual checkbox
const numbersCheckbox = document.getElementById('numbers-checkbox');      // individual checkbox
const symbolsCheckbox = document.getElementById('symbols-checkbox');      // individual checkbox
const generatePasswordButton = document.getElementById('generate-password-button');
const passwordOutput = document.getElementById('password-output');



// ****  01. Array variables and constants ****

let activeArray = [];

const lowercaseArray =
  [
    'a', 'b', 'c', 'd', 'e',
    'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o',
    'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z'
  ];

const uppercaseArray =
  [
    'A', 'B', 'C', 'D', 'E',
    'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z'
  ];

const numbersArray =
  [
    '0', '1', '2', '3', '4',
    '5', '6', '7', '8', '9'
  ];

const symbolsArray =
  [
    '!', '?', '#', '$', '%',
    '&', '/', '(', ')', '=',
    '>', '<', '°', '¬', '|'
  ];



// ****  02. Checkboxes click event listener  ****

// On click, this will check if the checkbox has the active class
lowercaseCheckbox.addEventListener("click", checkIfActive);
uppercaseCheckbox.addEventListener("click", checkIfActive);
numbersCheckbox.addEventListener("click", checkIfActive);
symbolsCheckbox.addEventListener("click", checkIfActive);

// If it does, the class will be removed and if it doesn't, the class will be added
function checkIfActive() {
  if (this.classList.contains('active-checkbox')) {
    this.classList.remove('active-checkbox');
  } else {
    this.classList.add('active-checkbox');
  }
}



// ****  03. Active array builder  ****

// This function will build the activeArray based on how many checkboxes are active
function buildActiveArray() {
  for (let i = 0; i < allCheckboxes.length; i++) {
    // Check if any of the checkboxes have an active class, if they do then add the corresponding checkbox array into activeArrays
    if(allCheckboxes[i].classList.contains('active-checkbox')) {
      switch (allCheckboxes[i].id) {
        case 'lowercase-checkbox':
          console.log('Lowercase is selected, adding it to activeArray');
          activeArray.push.apply(activeArray, lowercaseArray);
          break;
        case 'uppercase-checkbox':
          console.log('Uppercase is selected, adding it to activeArray');
          activeArray.push.apply(activeArray, uppercaseArray);
          break;
        case 'numbers-checkbox':
          console.log('Numbers is selected, adding it to activeArray');
          activeArray.push.apply(activeArray, numbersArray);
          break;
        case 'symbols-checkbox':
          console.log('Symbols is selected, adding it to activeArray');
          activeArray.push.apply(activeArray, symbolsArray);
          break;
        default:
          console.log('Test');
      }
    } 
  }
}



// ****  04. Password generator event listener  ****

generatePasswordButton.addEventListener('click', function name() {
  // Empty array (so the old values don't stay inside the array)
  activeArray = [];
  // Build the activeArray
  buildActiveArray();
  // Array variable that will contain all the random generated characters
  let passwordArray = [];
  // Generate random characters and display them on screen
  for (i = 0; i < passwordLengthInput.value; i++) {
    let randomNumber = Math.floor(Math.random() * activeArray.length);
    passwordArray.push(activeArray[randomNumber]);
    passwordOutput.innerHTML = passwordArray.join('');
  }
  // If the array is empty, give a warning
  if (activeArray == 0) {
    passwordOutput.innerHTML = 'Check any of the boxes below to generate your password';
    textBuzzAnimation();
  }
  // Check if the password length input is a valid number
  if (isNaN(parseInt(passwordLengthInput.value))) {
    passwordOutput.innerHTML = 'Invalid input, only number characters are allowed';
    textBuzzAnimation();
  // Check if the password length input is higher than 0 or lower than 50
  } else if (parseInt(passwordLengthInput.value) <= 0 || parseInt(passwordLengthInput.value) > 50) {
    passwordOutput.innerHTML = 'Enter a number higher than 0 and lower than 50';
    textBuzzAnimation();
  }
  // Change button color on click
  changeColorOnClick();
})



// ****  05. Other functions  ****

// Function that adds or removes the buzz out animation
function textBuzzAnimation() {
  passwordOutput.classList.add('buzz-out');
  setTimeout(removeClass, 1000);
  function removeClass() {
    passwordOutput.classList.remove('buzz-out');
  }
}

// Function that adds or removes the click animation
function changeColorOnClick() {
  generatePasswordButton.classList.add('clickAnimation');
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
