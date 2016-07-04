INITIAL_FRAME_NUMBER = 10
STARTING_SCORE = 0

function Game() {
  this.frameIndex = 0;
  this.totalScore = STARTING_SCORE;
  this.scores = []

}

Game.prototype.play = function() {
  var frame = new Frame;
  this.score << frame.score()
  this.frameIndex++;
}
