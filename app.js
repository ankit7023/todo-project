const express = require("express");
const bodyParse = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.get("/", function(req, res){
  var today = new Date();

  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  var day = today.toLocaleDateString("en-Us", options);

  res.render("index", {day: "day"});
});

app.listen("3000", function(){
  console.log("Your server is running at port 3000!!");
});
