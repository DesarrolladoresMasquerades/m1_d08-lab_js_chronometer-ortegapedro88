class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.currentMili = 0;
    this.intervalIdMil = null;
  
  }

  start(callback) {
   this.intervalId = setInterval(() => {
      this.currentTime +=1
      callback()
      this.getMilisec
    }, 1000);

   this.intervalIdMil = setInterval(() => {
      this.currentMili += 1
      callback()
    }, 10);

   
  }

  getMinutes() {

return parseInt(this.currentTime/60)
  }

  getSeconds() {
    return (this.currentTime)%60
  }

  getMilisec(){
    return this.currentMili%100
  }

  computeTwoDigitNumber(value) {
    let strValue = value.toString()
    if(strValue.length < 2){return "0"+strValue     
  }else return strValue
}


  stop() {
    clearInterval(this.intervalId)
    clearInterval(this.intervalIdMil)
  }

  reset(callback) {
    this.currentTime = 0;
    this.currentMili = 0;
    if(callback)callback();
  }

  split() {

    return this.computeTwoDigitNumber(this.getMinutes())+"m "+this.computeTwoDigitNumber(this.getSeconds())+"s "+this.computeTwoDigitNumber(this.getMilisec())+"ms"

  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
