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
const IncludeSpecialcharacters = document.getElementById
  ('include-specialcharacters')
const form = document.getElementById('passwordGeneratorForm')
const password = document.getElementById('password')
// const password = document.getElementById('password')

// var includeUppercase = false;
// var includeNumbers = false;
// var includeSpecialcharacters = false;

const UpperCase = ['A', 'B', 'C', 'D', "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const LowerCase = ['a', 'b', "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const Specialchar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", "{", "}", "[", "]", "|", "/", "?", "<", ">", ".", ":", ";", "~", "`"]

characterAmount.addEventListener('input', syncCharacterAmount)
characterRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
  e.preventDefault()
  const characterAmount = characterAmount.value
  const includeUppercase = includeUppercase.checked
  const includeLowercase = includeLowercase.checked
  const includeNumbers = includeNumbers.checked
  const includeSpecialcharacters = includeSpecialcharacters.checked
  const password = generatePassword(characterAmount, includeUppercase, includeLowercase, includeNumbers, includeSpecialcharacters)
  passwordDisplay.innerText = password
})

// const characterRange = document.getElementById
//   ('characterRange')
// const characterAmount = document.getElementById
//   ('characterAmount')

var generateBtn = document.querySelector("#generate");


// var slideValue = 0;
//do not touch
function synccharacterAmount(e) {
  const value = e.target.value
  slideValue = value;

  characterAmount.value = value
  characterRange.value = value
}


function generatePassword(characterAmount, includeUppercase, includeLowercase, includeNumbers, includeSpecialcharacters) {
  let characterAmount = ['value'];
  if includeUppercase = ['UpperCase'];
  if includeLowercase = ['LowerCase'];
  if includeNumbers = ['Numbers'];
  if includeSpecialcharacters = ['Specialchar'];
  var characterAmount = characterAmount.value;
  for (let i = 0; i < characterAmount; i++) {
    result += Math.floor(Math.random() *
      characterAmount)]
      generatePassword.push(String.)
  }
  return result;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword(characterAmount, includeUppercase, includeLowercase, includeNumbers, includeSpecialcharacters);
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
