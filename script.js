// Assignment Code
var generateBtn = document.querySelector("#generate");


var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "/", "<", ">", "+"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function getRandom(arr) {
  var randomI = Math.floor(Math.random() * arr.length);
  var randomEl = arr[randomI]
  return randomEl

}
function getUserOptions() {
  var length = parseInt(
    prompt("How long do you want your password? Please choose between 8-128 characters.")
  )
  if (Number.isNaN(length)) {alert("Please enter a number")
  return null
  }
  if (length < 8 || length > 128) {
    alert("Please choose between 8-128")
  }
  var wantNumber = confirm("Click OK for Numbers")
  var wantCharacters = confirm("Click Ok for Special Characters")
  var wantUpperCase = confirm("Click Ok for Uppercase letters")
  var wantLowerCase = confirm("Click Ok for Lowercase letters")
  if (wantNumber === false && wantCharacters === false && wantUpperCase === false && wantLowerCase === false){
    alert("Must select at least one")
    return null
  }
  var userOptions = {
    length:length,
    wantNumber:wantNumber,
    wantCharacters:wantCharacters,
    wantUpperCase:wantUpperCase,
    wantLowerCase:wantLowerCase
  }
  return userOptions
}

function generatePassword() {
  var choices = getUserOptions();
  var finalResults = [];
  var characters = [];
  var choosenCharacters = [];

  if (!choices) return null;
  if (choices.wantNumber){
    characters=characters.concat(number);
    choosenCharacters.push(getRandom(number))
  }
  if (choices.wantCharacters){
    characters=characters.concat(specialCharacters);
    choosenCharacters.push(getRandom(specialCharacters))
  }
  if (choices.wantUpperCase){
    characters=characters.concat(upperCase);
    choosenCharacters.push(getRandom(upperCase))
  }
  if (choices.wantLowerCase){
    characters=characters.concat(lowerCase);
    choosenCharacters.push(getRandom(lowerCase))
  }
  for(var i = 0; i < choices.length; i++){
    var character = getRandom(characters)
    finalResults.push(character)
  }

  for(var i = 0; i < choosenCharacters.length; i++){
    finalResults[i] = choosenCharacters[i]
  }

  return finalResults.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);