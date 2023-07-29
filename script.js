// Assignment Code
 const numbers = '0123456789';
 const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
 const lowercase = 'abcefghijklmnopqrstuvwxyz';
 const special = '!@#$%^&*-+=|?<>`~_';

 const characters = numbers + uppercase + lowercase + special;


function generatePassword() {
  var howManycharacters = prompt("How many characters would you like your password to have? Between 8-128 characters.");
howManycharacters = parseInt(howManycharacters,10)
 if (howManycharacters < 8 | howManycharacters > 128) {
  alert("Please enter a valid password between 8 - 128.");
  return;
 }
 else if (isNaN(howManycharacters)) {
  howManycharacters = alert("Please enter a valid number.")
 } else { 
  var uppercase = confirm("would you like your password to include uppercase?");
if (uppercase) {
  
}
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
