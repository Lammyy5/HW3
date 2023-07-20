// Assignment Code
var numbers = ["0","1","2",'3','4','5','6','7','8','9'];
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowercase = ['a','b','c','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var special = ['!','@','#','$','%','^','&','*','-','+','=','|','?','<','>','`','~','_'];
var possible = [];

function generatePassword() {
  var howManycharacters = prompt("How many characters would you like your password to have? Between 8-128 characters.");
howManycharacters = parseInt(howManycharacters,10)
 if (howManycharacters < 8 | howManycharacters > 128) {
  alert("Please enter a valid password between 8 - 128.");
 }
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
