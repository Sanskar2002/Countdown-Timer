const timeInput = document.getElementById("timeInput");
const settimerbtn = document.getElementById("settimerbtn");
const outputtxt = document.getElementById("outputtext");
const pausebtn = document.getElementById("pause")
const playbtn = document.getElementById("play")

//fetched all the html elements

let timer; //saves the timer
let valueInSeconds; //second remaining
let isPaused = false; //to check if timer is paused or not

function startTimer() {
    if (timer) clearInterval(timer);
    valueInSeconds = parseInt(timeInput.value); //convert string value in number
    if (isNaN(valueInSeconds)) {
      outputtxt.innerText = "Enter a valid number"; 
      return;
    }
    
    if (valueInSeconds <= 0) {
      outputtxt.innerText = "Enter a positive number";
      return;
    }

    isPaused = false;

    runTimer();
}

function runTimer() {
    timer = setInterval(() => {
      if (!isPaused) {
        valueInSeconds--;
        outputtxt.innerText = `${valueInSeconds} seconds remaining`;

        if (valueInSeconds <= 0) {
          outputtxt.innerText = "Times up";
          clearInterval(timer);
        }
      }
    }, 1000);
}


settimerbtn.addEventListener('click', startTimer);
pausebtn.addEventListener('click', ()=>{
    if(!isPaused){
        isPaused = true;
        clearInterval(timer);
    }
})

playbtn.addEventListener('click', ()=>{
    if (isPaused && valueInSeconds > 0) {
      isPaused = false;
      runTimer();
    }
})