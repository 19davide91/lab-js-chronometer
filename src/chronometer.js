class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime=0;
    this.intervalId=null;
  }

  start(printTimeCallback) {
    return this.intervalId = 
    setInterval(()=>{
      this.currentTime+=1;
      if(printTimeCallback){
      printTimeCallback();
    }
    },1000);
  }

  getMinutes() {
    // ... your code goes here
    
      return Math.floor(this.currentTime/60);
    }

  getSeconds() {
    // ... your code goes here
    // if(this.currentTime = 0){
    //   return 0;
    // }
    // else {
    return this.currentTime % 60;
    // }
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
   return value.toString().padStart(2,'0')
    // if(stringOfNumbers.length < 2){
    //   return `0${value}`
    // }
    // else{
    //  return `${value}`
    // }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here

    const minsPadded = this.computeTwoDigitNumber(this.getMinutes())
    const secondsPadded = this.computeTwoDigitNumber(this.getSeconds())
    return `${minsPadded}:${secondsPadded}`;
  }
}

let example = new Chronometer ()
console.log(example.computeTwoDigitNumber(6))