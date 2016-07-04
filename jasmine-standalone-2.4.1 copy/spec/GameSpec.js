describe("Game", function() {
  var game;
});

  beforeEach(function() {
    game = new Game();
  });

  it("has 10 frames initially", function() {
    expect(game.frameIndex).toEqual(0);
  });

  it("has a score of 0 intially", function() {
    expect(game.totalScore).toEqual(0);
  });

  it("increases the frame index after each play", function() {
    game.play();
    expect(game.frameIndex).toEqual(1);
  });

  // describe("regular play", function() {
  //   var frame;
  // });
  //
  //   beforeEach(function() {
  //     frame = jasmine.SpyObject(frame,"score").and.returnValue(2);
  //   });
  //
  //   it("keeps track of the frames' scores", function() {
  //     expect(game.scores).toEqual([2]);
  //   });
