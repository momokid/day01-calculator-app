//Return list of all keys
const keys = document.querySelectorAll(".key");
const mainDisplay = document.querySelector('.display');
let values = [];

//Get the value of the key clicked
for (const key of keys) {
  key.addEventListener("click", () => {
    
    try {
      const keyPressed = key.attributes['value'].value;
      displayPressedKey(keyPressed)
      
    } catch (error) {
      console.log("An error has been encountered ", error);
    }
  });
}

//Clear screen
const clearScreen= function (){
    mainDisplay.innerHTML=""
}

//Display selected value
const displayPressedKey = (key)=>{
    mainDisplay.innerHTML += " "+key
}