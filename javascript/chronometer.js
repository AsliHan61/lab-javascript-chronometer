class Chronometer {
  constructor(){
    this.currentTime = 0;
    this.intervalId = null;
    this.currentMilliseconds =0;
    this.milliSecondsIntervalId =0
    // ... your code goes here
  }

  start(callback, printMilliseconds) {
    this.intervalId = setInterval(()=>{
      this.currentTime++;
      if(callback) callback();
    }, 1000);

    this.milliSecondsIntervalId= serInterval(()=>{
      if (this.currentMilliseconds === 99) {
        this.currentMilliseconds=0;
      }
      this.currentMilliseconds +=1;
      if(printMilliseconds) printMilliseconds();
    }, 10);
    // ... your code goes here
  }

  getMinutes() {
    let currentTimeMin = Math.floor(this.currentTime/60);
    console.log(currentTimeMin)
    return currentTime;
    // ... your code goes here
  }

  getSeconds() {
    let currentTimeSec = this.currentTime % 60;
    return currentTimeSec;
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    return("0" value).slice(-2)
    // ... your code goes here
  }

  stop() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let milliseconds = this.computeTwoDigitNumber(this.currentMilliseconds);
    return `${minutes}:${seconds}:${milliseconds}`;
    // ... your code goes here
  }
}
  reset() {
    this.currentTime =0;
    this.currentMilliseconds =0;
    // ... your code goes here
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let milliseconds = this.computeTwoDigitNumber(this.currentMilliseconds);
    return `${minutes}:${seconds}:${milliseconds}`;
    // ... your code goes here
  }


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
