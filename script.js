// variable char to be used
var characters = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  symbol: '!@#$%^&*(){}[]<>?+=_-',
};

// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  // debugger;
  var rawpassword = "";
  var passwordText = document.querySelector("#password");
  // var password = generatePassword(); <--**Don't think this was needed?
  // password gen. window prompts
  var passwordLength = window.prompt('Submit your password length, between 8 and 128 characters.');
  var lowercaseConfirm = window.confirm('Do you want lowercase letters?');
  if (lowercaseConfirm) {
      window.alert("You added lowercase letters.");
    rawpassword += characters.lowercase;
  };
  var uppercaseConfirm = window.confirm('Do you want uppercase letters?');
  if (uppercaseConfirm) {
      window.alert("You added uppercase letters.");
    rawpassword += characters.uppercase;
  }
  var symbolConfirm = window.confirm('Do you want symbols?');
  if (symbolConfirm) {
      window.alert("You added symbols.");
    rawpassword += characters.symbol;
  }
  var numberConfirm = window.confirm('Do you want numbers?');
  if (numberConfirm) {
    window.alert("You added numbers.");
    rawpassword += characters.number;
  }
// Password gen. reset if no selections made!
  if (!lowercaseConfirm && !uppercaseConfirm && !symbolConfirm && !numberConfirm) {
    window.alert("You must make at least one character type selection. Please try again!");
    return writePassword();
  }

  var password = "";
  for (let i = 0; i < passwordLength; i++) {
    password += rawpassword[Math.floor(Math.random() * rawpassword.length)]
  }

  passwordText.value = password;

}
function generatePassword () {
  writePassword();
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// <!--       _
//        .__(.)< (MEOW)
//         \___)   
//  ~~~~~~~~~~~~~~~~~~-->