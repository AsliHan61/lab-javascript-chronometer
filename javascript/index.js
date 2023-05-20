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
  printMinutes();
  printSeconds();
  // ... your code goes here
}

function printMinutes() {
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerHTML = minutes[0];
  minUniElement.innerHTML = minutes[1];
  // ... your code goes here
}

function printSeconds() {
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds)
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerHTML = minutes[0];
  minUniElement.innerHTML = minutes[1];
  // ... your code goes here
}

function printSplit() {
  let newLi = document.clearElement('li');
  newLi.innerHTML = `${chronometer.split()}`;
  splits.appendChild(newLi);
  // ... your code goes here
}

function clearSplits() {
  splits.innerHTML= "";
  // ... your code goes here
}

function setStopBtn() {
  btnLeftElement.className = 'btn stop'
  btnRightElement.innerHTML = 'STOP'
  // ... your code goes here
}

function setSplitBtn() {
  btnLeftElement.className = 'btn stop';
  btnRightElement.innerHTML = 'SPLIT'
  // ... your code goes here
}

function setStartBtn() {
  btnLeftElement.className = 'btn start';
  btnLeftElement.innerHTML = 'START';
  // ... your code goes here
}

function setResetBtn() {
  btnRightElement.className ='btn reset';
  btnRightElement.innerHTML = 'RESET';
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if(btnLeftElement.classList.contains('start')){
    chronometer.start(printTime, printMilliseconds);
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stop();
    setStartBtn();
    setResetBtn();
  }
  // ... your code goes here
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.classList.contains('reset')){
    clearSplits();
    chronometer.reset();
    minDecElement.innerHTML=0;
    minUniElement.innerHTML=0;
    secDecElement.innerHTML=0;
    secUniElement.innerHTML=0;
    milDecElement.innerHTML=0;
    milUniElement.innerHTML=0;
  } else {
    printSplit();
  }
  // ... your code goes here
});
