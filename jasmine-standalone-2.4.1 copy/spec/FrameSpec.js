describe("Frame", function() {
  var frame;
});

  beforeEach(function() {
    frame = new Frame();
  });

  it("has 10 pins initially", function() {
      expect(frame.pins).toEqual(10);
  });

  it("has 9 pins when 1 gets knocked over", function() {
    frame.knockDownPins(1);
    expect(frame.pins).toEqual(9);
  });

  it("has two throw at the beginning of each games", function () {
    expect(frame.throwsLeft).toEqual(2);
  });

  it("has a maximum of two throws per frame", function() {
    frame.knockDownPins(1);
    frame.knockDownPins(1);
    frame.knockDownPins(1);
    expect(frame.throwsLeft).toEqual(0);
    expect(frame.pins).toEqual(8);
  });

  it("has an initial score of 0", function() {
    expect(frame.score()).toEqual(0);
  });

  it("has a score of 2 when one pin is knocked down twice consecutively", function() {
    frame.knockDownPins(1);
    frame.knockDownPins(1);
    expect(frame.score()).toEqual(2);
  });

  it("has a score of 10 after a strike", function() {
    frame.knockDownPins(10);
    expect(frame.score()).toEqual(10);
  })
