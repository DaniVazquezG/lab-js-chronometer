class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime ++
      if (printTimeCallback) { printTimeCallback ()}
    }, 10)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000)
  }

  getSeconds() {
    return Math.floor(this.currentTime / 100) % 60
  }

  getCentiseconds() {
    return this.currentTime % 100
  }

  computeTwoDigitNumber(value) {
    let stringValue = value.toString()
    return stringValue.length < 10 ? '0' + stringValue : stringValue
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    
  }
}
