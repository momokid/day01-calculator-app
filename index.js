//Return list of all keys
const keys = document.querySelectorAll(".key");
const displayInput = document.querySelector('.displayInput');
const displayResult = document.querySelector('.displayResults');

let values = [];

//Get the value of the key clicked
for (const key of keys) {
  key.addEventListener("click", () => {
    
    const keyPressed = key.attributes['value'].value;
      
      if(keyPressed ==='C' || keyPressed ==='del'){
          return false;
      }
      displayPressedKey(keyPressed)

  });
}

//Clear screen
const clearScreen= function (){
    mainDisplay.innerHTML=""
}

//Clear the display input
const clearDisplayInput = ()=>{
    displayInput.innerHTML = ""
}


//Clear the displayed result
const clearDisplayResults = ()=>{
    displayResult.innerHTML = ""
}

//Display selected value
const displayPressedKey = (key)=>{
    displayInput.innerHTML += key
}