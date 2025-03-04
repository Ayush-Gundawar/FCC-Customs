const inputEl = document.getElementById('number');
const buttonEl = document.getElementById('convert-btn');
const outputEl = document.getElementById('output');
let isError = false;
let result = '';

buttonEl.addEventListener('click',()=>{
    checkNumber(inputEl.value);
    outputEl.textContent = result;
    isError ? outputEl.classList.add('error') : outputEl.classList.remove('error');
})

function checkNumber(numstr){
    let num = +numstr;
    if(numstr === ''){
        result= 'Please enter a valid number';
        isError = true;
    }
    else if(num >= 4000){
        result = 'Please enter a number less than or equal to 3999';
        isError = true;
    }
    else if(num < 1){
        result='Please enter a number greater than or equal to 1';
        isError = true;
    }
    else{
        isError= false;
        result = converDecToRoman(num);
    }
}

const romans = ['M','CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', '1V', 'I'];
const arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

const converDecToRoman = (num)=>{
    let result='';
    for(let itr=0; itr < 13; itr++){
        if(num === 0 ){
            break;
        }
        let derivedNum = Math.floor(num / arabic[itr]);
        if(derivedNum === 0){
            continue;
        } else{
            result += romans[itr].repeat(derivedNum);
            num = num%arabic[itr];

        }
    }
    return result;
}
