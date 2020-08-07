// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// gather options
  //length
  //charters
  var Length = window.prompt("length greater than 8");
               
  


// genertate password
  // check options
  switch (options) {
    case "Lenght":
    options.lenght();
    break;
  
  case "upperCase":
    options.upperCase();
    break;
    
  case "lowerCase":
    options.upperCase();
    break;
    
  }

// print password to screen


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
