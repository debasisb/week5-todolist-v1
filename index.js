//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

// create a date object that requires the date.js file
const date = require(__dirname + "/date.js");

const app = express();

// set an array for the personal items in the list
let personal = ["Debasis", "Bhattacharya", "Hawaii", "USA"];

// set an empty array for zodiac items
let zodiac = ["Debasis", "Bhattacharya", "Capricorn", "Garnet"];

// set EJS as the viewing engine to display html
app.set("view engine", "ejs");

// use body parser to parse html file
app.use(bodyParser.urlencoded({ extended: true }));

// use Express to serve or display static files such as images, CSS, JS files etc.
app.use(express.static("public"));

// Get the /Personal URL information
app.get("/Personal", function(req, res) { 
  res.render("list", { listTitle: "Personal Info", newListItems: personal });
});

// Get the /Zodiac URL information
app.get("/Zodiac", function(req, res) {
  res.render("list", { listTitle: "Zodiac and Birthstone", newListItems: zodiac });
});


app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
