const lowerletter = document.querySelector('.lower_letter')
const upperletter = document.querySelector('.upper_letter')
const numbers = document.querySelector('.numbers') 
const especial = document.querySelector('.especial') 
const password = document.querySelector('.password')
const buttonGenerate = document.querySelector('.password_generate_button')
const passwordLength = document.querySelector('.password_length')

const lettersArray = ['a', 'b', 'c', 'd', 'e' , 'f', 'g', 'h', 'i','j', 'k', 'l', 'm', 'n', 'o', 'p', 'q','r', 's', 't',
'u', 'v', 'w', 'x', 'y', 'z']
const numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const especialArray = ['!', '@', '#', '$', '%', '*', '(', ')', '_', '+', '=', '|', ';', '~', '^', ']', '[', '.']


const lowerAdd = event =>{
    let chosenChar = lettersArray[Math.floor(Math.random()*lettersArray.length)]
    return chosenChar
}

const upperAdd = event =>{
    let chosenChar = lettersArray[Math.floor(Math.random()*lettersArray.length)]
    return chosenChar.toUpperCase()
}

const numberAdd = event =>{
    let chosenChar = numbersArray[Math.floor(Math.random()*numbersArray.length)]
    return chosenChar
}

const especialAdd = event =>{
    let chosenChar = especialArray[Math.floor(Math.random()*especialArray.length)]
    return chosenChar
}

const choicesSettings = event =>{
    let passwordSettings = []

    if (lowerletter.checked){
        passwordSettings.push(lowerAdd())
    }
    if (upperletter.checked){
        passwordSettings.push(upperAdd())
    }
    if (numbers.checked){
        passwordSettings.push(numberAdd())
    }
    if (especial.checked){
        passwordSettings.push(especialAdd())
    }
    return passwordSettings[Math.floor(Math.random()*passwordSettings.length)]
}

const finalGenerator = event =>{
    const length = passwordLength.value
    let passwordGenerated = []
    for (var i=0; i < length; i++){
        let passwordIndex = choicesSettings()
        passwordGenerated.push(passwordIndex)
    }
    console.log(length)
    return password.innerText = passwordGenerated.join('');
    
}
buttonGenerate.addEventListener('click', finalGenerator)