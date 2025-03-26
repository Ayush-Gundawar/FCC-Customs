const checkTelephone = num =>{
    const numRegex = /^1?\s?(\(\d{3}\)|\d{3})[-\s]*\d{3}[-\s]*\d{4}$/gm;
    return num.match(numRegex) ? true: false;
}

const inputEl = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultDiv = document.getElementById('results-div');
const screenEl = document.getElementById('screen');
const themeBtn = document.getElementById('theme');

checkBtn.addEventListener('click',()=>{
    let inputVal = inputEl.value;
    console.log(inputVal);
    if(inputVal===''){
        alert('Please provide a phone number');
        return;
    }
    const result = checkTelephone(inputVal);
    let resultStr = '';
    resultDiv.classList.remove('green', 'red');
    if(result){
        resultStr = `Valid US number: ${inputVal}`
        resultDiv.classList.add('green');
    }else{
        resultStr = `Invalid US number ${inputVal}`
        resultDiv.classList.add('red');
    }
    resultDiv.textContent = resultStr;
});

clearBtn.addEventListener('click',()=>{
    inputEl.value = '';
    resultDiv.classList.remove('green','red');
    resultDiv.textContent = '';
});


// Theme button and themes:
const lightTheme = ()=>{
    themeBtn.style.backgroundColor = '#1f0317';
    inputEl.classList.remove('input-dt');
    clearBtn.classList.remove('btn-dt');
    checkBtn.classList.remove('btn-dt');
    screenEl.classList.remove('screen-dt');
    inputEl.classList.add('input-lt');
    clearBtn.classList.add('btn-lt');
    checkBtn.classList.add('btn-lt');
    screenEl.classList.add('screen-lt');

}
const darkTheme = () =>{
    themeBtn.style.backgroundColor = '#78c6c2';
    inputEl.classList.remove('input-lt');
    clearBtn.classList.remove('btn-lt');
    checkBtn.classList.remove('btn-lt');
    screenEl.classList.remove('screen-lt');
    inputEl.classList.add('input-dt');
    clearBtn.classList.add('btn-dt');
    checkBtn.classList.add('btn-dt');
    screenEl.classList.add('screen-dt');
}
let darked = false;
themeBtn.addEventListener('click',()=>{
    if(darked){
        darked=false;
        lightTheme();
    } else{
        darked = true;
        darkTheme();
    }
});


console.log(checkTelephone('1 (555) 555-5555'));