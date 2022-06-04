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
  // var password = generatePassword();
  var passwordLength = window.prompt('Submit your password lenght, between 8 and 128 characters.');
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
  var symboleConfirm = window.confirm('Do you want symbols?');
  if (symboleConfirm) {
      window.alert("You added symbols.");
    rawpassword += characters.symbol;
  }
  var numberConfirm = window.confirm('Do you want numbers?');
  if (numberConfirm) {
    window.alert("You added numbers.");
    rawpassword += characters.number;
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