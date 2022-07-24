//Return list of all keys
const keys = document.querySelectorAll('.key')
const displayInput = document.querySelector('.displayInput')
const displayResult = document.querySelector('.displayResults')

let values = []

//Get the value of the key clicked
for (const key of keys) {
  key.addEventListener('click', () => {
    const keyPressed = key.attributes['value'].value

    if (keyPressed === 'C' || keyPressed === 'del') {
      return false
    }
    displayPressedKey(keyPressed)
  })
}

//Clear screen
const clearDisplayInput = function () {
  displayInput.textContent = ''
  displayResult.textContent = ''
}

// //Clear the display input
// const clearDisplayInput = () => {
//   displayInput.textContent = ''
//   displayInput.textContent = ''
// }

// //Clear the displayed result
// const clearDisplayResults = () => {
//   displayResult.textContent = ''
// }

//Display selected value
const displayPressedKey = (key) => {
  displayInput.innerHTML += key
}

//Basic functionality of the calculator

//Addition
function add(x, y) {
  return x + y
}

//Subtraction
function subtract(x, y) {
  return x - y
}

//Multiply
function multiply(x, y) {
  return x * y
}

//Division
function division() {
  return x / y
}

//Operator function
function operate(operator, a, b) {
  let result
  //   switch (operator) {
  //     case '+':
  //       result = add(a, b)
  //       break
  //     case '-':
  //       result = subtract(a, b)
  //       break
  //     case '*':
  //       result = multiply(a, b)
  //       break
  //     case '/':
  //       result = division(a, b)
  //       break
  //     default:
  //       result = 'Inpurt Error'
  //   }

  if (operator === '+') {
    return add(a, b)
  } else if (operator === '-') {
    return subtract(a, b)
  } else if (operator === '*') {
    return multiply(a, b)
  } else if (operator === '/') {
    return division(a, b)
  }
}
