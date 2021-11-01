// Option Form
const characterRange = document.getElementById
  ('characterRange')
const characterAmount = document.getElementById
  ('characterAmount')
const includeUppercase = document.getElementById
  ('include-uppercase')
const includeLowercase = document.getElementById
  ('include-lowercase')
const includeNumbers = document.getElementById
  ('include-numbers')
const includeSpecialcharacters = document.getElementById
  ('include-specialcharacters')

const upperCaseArr = ['A', 'B', 'C', 'D', "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const lowerCaseArr = ['a', 'b', "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const specialCharactersArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", "{", "}", "[", "]", "|", "/", "?", "<", ">", ".", ":", ";", "~", "`"]

characterAmount.addEventListener('input', syncCharacterAmount)
characterRange.addEventListener('input', syncCharacterAmount)

var generateBtn = document.querySelector("#generate");

function syncCharacterAmount(e) {
  const value = e.target.value


  characterAmount.value = value
  characterRange.value = value
}

function generatePassword() {
  let lengthOfPassword = characterAmount.value
  let upperCase = includeUppercase.checked
  let lowerCase = includeLowercase.checked
  let numbers = includeNumbers.checked
  let specialCharacters = includeSpecialcharacters.checked
  console.log('button clicked')
  console.log(upperCase, lowerCase, numbers, specialCharacters)
  if (!upperCase && !lowerCase && !numbers && !specialCharacters) {
    return 'invalid input'
  }
  let password = ""
  let possibleCharacters = [];
  if (upperCase) { possibleCharacters = possibleCharacters.concat(upperCaseArr) }
  if (lowerCase) { possibleCharacters = possibleCharacters.concat(lowerCaseArr) }
  if (numbers) { possibleCharacters = possibleCharacters.concat(numbersArr) }
  if (specialCharacters) { possibleCharacters = possibleCharacters.concat(specialCharactersArr) }

  console.log(possibleCharacters)
  for (var i = 0; i < lengthOfPassword; i++) {
    password +=
      possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)]
  }

  return password
}

function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
