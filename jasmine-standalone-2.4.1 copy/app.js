var express = require("express");
var app = express();
var game = require("./src/game.js");
var frame = require("./src/frame.js");
app.set("views", __dirname + "/views");
app.set("view engine", "ejs")

app.get("/index", function(req, res) {
  res.render("index.ejs")
})





app.listen(3000, function() {
  console.log(":listening on port 3000");
});
