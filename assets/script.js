// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var writePassword = function () {
  var options = getOptions()
  //var password = generatePassword()
  //password
}

var getOptions = function () {
    var promptLength = window.prompt("Select a lenght between 8 and 128?");
    while (promptLength <= 7 || promptLength >= 129 ) {
      window.alert("You need to provide a valid answer! Please try again.");
      var promptLength = window.prompt("Select a lenght between 8 and 128?");
    } 
    length = promptLength
    console.log (length)

  var promptLower = window.prompt("Do you want to include lowercase letters?");
    while (promptLower === "" || promptLower === null) {
      window.alert("You need to provide a valid answer! Please try again.");
      var promptLower = window.prompt("Do you want to include lowercase letters?");
    if (promptLower === "yes" || promptLower === "YES") {
      randomLower()
      console.log(randomLower)
    }
  }

  var promptUpper = window.prompt("Do you want to include uppercase letters?");
    while (promptUpper === "" || promptUpper === null) {
      window.alert("You need to provide a valid answer! Please try again.");
      var promptUpper = window.prompt("Do you want to include uppercase letters?");
    if (promptUpper === "y" || promptUpper === "Y") {
      randomUpper()
      console.log (randomUpper);
    }
  }

  var promptNum = window.prompt("Do you want to include numbers?"); 
    while (promptNum === "" || promptNum === null) {
      window.alert("You need to provide a valid answer! Please try again.");
      var promptNum = window.prompt("Do you want to include numbers?");
    if (promptNum === "y" || ppromptNum === "Y") {
      randomNum()
      console.log (randomNum);
    }
  }

  var promptSpecial = window.prompt("Do you want to include special characters?");
    while (promptSpecial === "" || promptSpecial === null) {
      window.alert("You need to provide a valid answer! Please try again.");
      var promptSpecial = window.prompt("Do you want to include special characters?");
    if (promptSpecial === "y" || promptSpecial === "Y") {
      randomSpecial()
      console.log (randomSpecial);
    }
  }
}; // end function

 // var passwordText = document.querySelector("#password");

  // passwordText.value = password;



//lower
var randomLower = function () {
  var lower = 'abcdefghijklmnopqrstuvwxyz';
  return lower[Math.floor(Math.random() * upper.length)];
} // end randomLower function


//upper
function randomUpper() {
  var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return upper[Math.floor(Math.random() * upper.length)];
} // end randomUpperfunction

//numbers
var randomNum = function() {
  var value = Math.floor(Math.random() * 10);
  return value;
};

//Special charters
function randomSpecial() {
const symbols = '!@#$%^&*()+-./:;<=>?[\]^_`{|}~ '[math.floor(math.random() * symbols.length)]; 
return sysmbols
} // end randomSpecial function


/*          
print password to screen
*/

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
