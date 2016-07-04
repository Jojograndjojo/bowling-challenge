INITIAL_PINS_NUMBER = 10
INITIAL_THROWS_NUMBER = 2

function Frame() {
  this.pins = INITIAL_PINS_NUMBER;
  this.throwsLeft = INITIAL_THROWS_NUMBER;
  this.temporaryScore = 0;
}

Frame.prototype.knockDownPins = function(numberOfPins) {
  if (this.throwsLeft === 0 ) {
    return this.pins
}
  else {
    this.pins -= numberOfPins
    this.throwsLeft--
  }
}

Frame.prototype.score = function() {
  return(INITIAL_PINS_NUMBER - this.pins)
}
