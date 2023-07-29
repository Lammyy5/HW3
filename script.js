// Assignment Code
const numbers = '0123456789';
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcefghijklmnopqrstuvwxyz';
const special = '!@#$%^&*-+=|?<>`~_';
const characters = [numbers, upperCase, lowerCase, special];


function generatePassword() {
  var charChoiceNum = window.prompt("How many characters would you like your password to have? Between 8-128 characters.");
  var charChoiceNum = parseInt(charChoiceNum, 10);
  if (charChoiceNum < 8 || charChoiceNum > 128) {
    alert("Please enter a valid password between 8 - 128.");
    return;
  }
  if (isNaN(charChoiceNum)) {
    charChoiceNum = window.alert("Please enter a valid number.");
  }
  var useUpperCase = confirm("Do you want to use uppercase characters?");
  var useLowerCase = confirm("Do you want to use lowercase characters?");
  var useNumbers = confirm("Do you want to use numbers characters?");
  var useSpecial = confirm("Do you want to use special characters?");


  if (!useUpperCase && !useLowerCase && !useNumbers && !usespecial) {
    alert("Password must include at least one character type.")
    return;
  }


} {

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
