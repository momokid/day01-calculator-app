//Return list of all keys
const keys = document.querySelectorAll('.key')
const displayInput = document.querySelector('.displayInput')
const displayResult = document.querySelector('.displayResults')

let values = '',
  operatorSign = '',
  equalSign = '',
  calcValues = [],
  prvTempValue = '',
  curTempValue = ''

//Get the value of the key clicked
for (const key of keys) {
  key.addEventListener('click', () => {
    const keyPressed = key.attributes['value'].value

    if (keyPressed === 'C' || keyPressed === 'del') {
      return false
    } else if (keyPressed === '+' || keyPressed === '*') {
      operatorSign = keyPressed
      prvTempValue = curTempValue
      displayResult.textContent = `${curTempValue} ${operatorSign}`
      curTempValue = ''
      return false
    } else if (keyPressed === '=') {
      displayResult.textContent = `${prvTempValue} ${operatorSign} ${curTempValue}`
      let results = operate(operatorSign, prvTempValue, curTempValue)
      displayInput.textContent = results
      calcValues.push(results)
      return false
    }
    // alert(`${keyPressed} and ${operatorSign}`)
    displayPressedKey(keyPressed)
  })
}

//Clear screen
const clearDisplayInput = function () {
  curTempValue = ''
  displayInput.textContent = ''
  displayResult.textContent = ''
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
  a = parseFloat(a)
  b = parseFloat(b)

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

//Display selected value
const displayPressedKey = (key) => {
  curTempValue += key
  displayInput.textContent = curTempValue

  return curTempValue
}
