casper.test.begin("can count points", function(test) {
  casper.start("http://localhost:3000/index", function() {
    test.assertHttpStatus(200);
    test.assertTextExists("Your score")
    }).run(function() {
    test.done();
  });
});
