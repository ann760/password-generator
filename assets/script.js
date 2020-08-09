var lowerCaseArray = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x' ,'y', 'z'
]

var upperCaseArray = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X' ,'Y', 'Z'
]

var specialArray= [
  '!', '@', '#', '$', '%', '^', '&', '*', '+', '-', '.', '/', '<','=','>','?'
]

var numbersArray= [
  '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'
]

function passwordOptions() {
  var length = parseInt(prompt("Select a lenght between 8 and 128?"));
  if (length <=7 || length >= 129) {
    alert("Password lenght must be between 8 and 128.")
    return passwordOptions()
  }
  console.log (length)
  var lowerCase = confirm("click 'OK' to allow lower case letters")

  var upperCase = confirm("click 'OK' to allow upper case letters")

  var special = confirm("click 'OK' to allow special characters")

  var number = confirm("click 'OK' to allow numbers")
 
  if (lowerCase === false && upperCase === false && special === false && number === false){
    alert("You must select at least one option")
    return passwordOptions();
  }

  var options = {
    length: length,
    lowerCase: lowerCase,
    upperCase: upperCase,
    special: special,
    number: number

  }
 return options

}

function random(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElelment = arr[randomIndex]
  return randomElelment

}

function generatePassword() {
var passOptions = passwordOptions()
var result = []
var possibleChar = []
var guarenteeChar =[]

if (passOptions.number) {
possibleChar = possibleChar.concat(numbersArray)
guarenteeChar.push(random(numbersArray))
}

if (passOptions.lowercase) {
  possibleChar = possibleChar.concat(lowerCaseArray)
  guarenteeChar.push(random(lowerCaseArray))
  }

if (passOptions.uppercase) {
  possibleChar = possibleChar.concat(upperCaseArray)
  guarenteeChar.push(random(upperCaseArray))
  }

if (passOptions.special) {
  possibleChar = possibleChar.concat(specialArray)
  guarenteeChar.push(random(specialArray))
  }

  for (var i = 0; i < passOptions.length; i++){
    var finalPossibleChar = random(possibleChar)
    result.push(finalPossibleChar)
  }

  for (var i =0; i < guarenteeChar.length; i++){
    result[i] = guarenteeChar[i]
  }
return result.join("")
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// gather options
// genertate password
// print password to screen


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
