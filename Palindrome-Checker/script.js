
const inputElement = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const resultElement = document.getElementById('result');

const checkPalindrome=()=>{
  const originalText = inputElement.value;
  const inputText = cleanInput(inputElement.value);
  let resultText = '';
  if(inputText===''){
    alert("Please input a value");
  }
  if(isItPalindrome(inputText)===true){
    resultElement.classList.remove('red');
    resultElement.classList.add('green');
    resultText = `${originalText} is a Palindrome`;
  } else{
    resultElement.classList.remove('green');
    resultElement.classList.add('red');
    resultText = `${originalText} is not a Palindrome`;
  }
  resultElement.textContent = resultText;
}
const isItPalindrome= (str)=>{
  const revStr = str.split('').reverse().join('');
  return revStr === str? true : false;
}
const cleanInput=(str)=>{
  const regex=/[^\d|A-Z|a-z]+/g
  return str.replace(regex,'').toLowerCase();
}
checkButton.addEventListener('click',checkPalindrome);