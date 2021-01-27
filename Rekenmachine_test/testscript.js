// class Calculator {
//      constructor(outputField) {
//      this.outputField = outputField;
//      }

//  appendNumber(number) {
//      if (number === ".")

//      this.outputField = number
//  }

//  updateDisplay() {
//       this.outputField.innerText = this.outputField
//  }
// }


// Stap 1 : buttons/operators oproepen

const numbers = document.querySelectorAll('.number');
const wisAlles = document.querySelector('button.wisAlles');
const posNeg = document.querySelectorAll('.posNeg');
const moduleButton = document.querySelector('.modulo');
const divideButton = document.querySelector('.divide');
const multiplyButton = document.querySelector('.multiply');
const minusButton = document.querySelector('.minus');
const addUpButton = document.querySelector('.addUp');
const periodButton = document.querySelector('.period');
const equalsButton = document.querySelector('.gelijkAan');


const outputField = document.querySelector('#output-value');
console.log('outputField:', outputField)


// numbers.forEach(number => {
//      number.addEventListener('click', (e)=>{
//           if(e.target.innerText === '.' && !haveDot)
//      })
// })
// const calculator = new Calculator(outputField);

// numbers.forEach(button => {
//      button.addEventListener('click' , () => {
//           calculator.appendNumber(button.innerText)
//           calculator.updateDisplay()
//      })
// })

   
// console.log('outputField:', outputField)

// function getOutput() {
//      return document.getElementById("output-value").innerText;
// }

// function printOutput(x) {
//      document.getElementById("output-value").innerHTML=num;
// }

// printOutput("99");



