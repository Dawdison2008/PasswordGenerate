const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const special = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '{', '}', '[', ']', ':', ';', '?', ',', '.', '|', '\\'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const slider = document.querySelector('input')
const value = document.querySelector('.value')
const passwordText = document.querySelector('.password-text')
const generateBtn = document.querySelector('.btn')
const copy = document.querySelector('.copy')

//sldier i number
value.textContent = slider.value
slider.addEventListener('input', (event) => {
  value.textContent = event.target.value;
})

const add = (a, b) => {
  return a + b;
}

const getRandom = (arr) =>{
  const random = Math.floor(Math.random() * arr.length);
  return arr[random];
} 

const passwordGen = (number, array) =>{
  let password = ''
  for(let i = 0; i < number; i++){
    password += getRandom(array)
  }
  return password
}

const getCheckboxArray = () =>{
 const checkboxUppercase = document.querySelector('.uppercase');
 const checkboxLowercase = document.querySelector('.lowercase');
 const checkboxNumbers = document.querySelector('.numbers');
 const checkboxSymbols = document.querySelector('.symbols');
 const array = [];
 if(checkboxUppercase.checked) array.push(uppercase);
 if(checkboxLowercase.checked) array.push(lowercase);
 if(checkboxNumbers.checked) array.push(numbers);
 if(checkboxSymbols.checked) array.push(special);
 return array.flat(); 
}

generateBtn.addEventListener('click', () => {
  const array = getCheckboxArray();
  if (array.length > 1) {
    passwordText.textContent = passwordGen(value.textContent, array)
   } else{
    error()
  }
});

const error = () =>{
  passwordText.textContent = "No characters selected"
  
  setTimeout(() =>{
    passwordText.textContent = ''
  }, 2000)
}
copy.addEventListener('click', () => {
  copyToClipboard(passwordText.textContent)
})

const copyToClipboard = (password) => {
  navigator.clipboard.writeText(password)
  passwordText.textContent = 'You copied password'
}



