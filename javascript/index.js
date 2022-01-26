const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
 minDecElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0]
 minUniElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[1]
 secDecElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[0]
 secUniElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[1]
 milDecElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getMilisec())[0]
 milUniElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getMilisec())[1]
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  milDecElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getMilisec())[0]
  milUniElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getMilisec())[1]
}


function printSplit() {

  const splitList = document.createElement('li');
  splitList.innerText = chronometer.split()
  document.getElementById("splits").appendChild(splitList)

  }

function clearSplits() {
  document.getElementById("splits").remove()
  const newOl = document.createElement('ol');
  newOl.id = "splits"
  document.getElementById("splits-container").appendChild(newOl)



}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  
  btnLeftElement.classList.toggle("stop")
  btnLeftElement.classList.toggle("start")
  btnRightElement.classList.toggle("split")
  btnRightElement.classList.toggle("reset")   
  if(btnLeftElement.innerText === "START") {btnLeftElement.innerText = "STOP"
btnRightElement.innerText = "SPLIT"
chronometer.start(printTime)


}
  else {btnLeftElement.innerText = "START"
btnRightElement.innerText = "RESET"
chronometer.stop()
}


});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.innerText === "SPLIT"){printSplit()}
  else{chronometer.reset(printTime)
  clearSplits()} 
});
