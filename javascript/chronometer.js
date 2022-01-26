class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  
  }

  start(callback) {
   this.intervalId = setInterval(() => {
      this.currentTime +=1
      callback()
    }, 1000);

   
  }

  getMinutes() {

return parseInt(this.currentTime/60)
  }

  getSeconds() {
    return this.currentTime%60
  }

  computeTwoDigitNumber(value) {
    let strValue = value.toString()
    if(strValue.length < 2){return "0"+strValue     
  }else return strValue
}


  stop() {
    clearInterval(this.intervalId)
  }

  reset(callback) {
    this.currentTime = 0;
    if(callback)callback();
  }

  split() {

    return this.computeTwoDigitNumber(this.getMinutes())+":"+this.computeTwoDigitNumber(this.getSeconds())

  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
