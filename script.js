// Assignment Code
const numbers = '0123456789';
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcefghijklmnopqrstuvwxyz';
const special = '!@#$%^&*-+=|?<>`~_';
const characters = [numbers, upperCase, lowerCase, special];


function generatePassword() {
  var charChoice = window.prompt("How many characters would you like your password to have? Between 8-128 characters.");
  var charChoiceNum = parseInt(charChoice, 10);
  var passChars = [];



  if (isNaN(charChoiceNum) || charChoiceNum < 8 || charChoiceNum > 128) {
    window.alert("Please enter a valid number.");
    generatePassword();
  }
  if (window.confirm("Do you want to use uppercase characters?")) {
    passChars = passChars.concat(upperCase)
  }
  if (window.confirm("Do you want to use lowercase characters?")) {
    passChars = passChars.concat(lowerCase)
  }
  if (window.confirm("Do you want to use numbers characters?")) {
    passChars = passChars.concat(numbers)
  }
  if (window.confirm("Do you want to use special characters?")) {
    passChars = passChars.concat(special)
  }
  ;
  if (passChars == false) {
    window.alert("Must have at least one character choice selected");
    generatePassword();
  }
  var password = "";



  for (let i = 0; i < charChoiceNum; i++) {
    var randomIndex = (Math.floor(Math.random() * passChars.length));
    password = passChars[randomIndex];
  }
  return password;
}








var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
