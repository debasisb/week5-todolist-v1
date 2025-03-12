//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

// create a date object that requires the date.js file
const date = require(__dirname + "/date.js");

const app = express();

// set an array for the default items in the list
let personal = [
  "Debasis",
  "Bhattacharya",
  "Hawaii,
  "USA",
];
// set an empty array for new work items
let zodiac = [
  "Debasis",
  "Bhattacharya",
  "Capricorn
  "Garnet",
];

// setup an array for Fun and another for Weekend

// set EJS as the viewing engine to display html
app.set("view engine", "ejs");

// use body parser to parse html file
app.use(bodyParser.urlencoded({ extended: true }));

// use Express to serve or display static files such as images, CSS, JS files etc.
app.use(express.static("public"));

// default html file in web server
app.get("/", function (req, res) {
  //get the system date from the getDate function exported by the date.js file
  let day = date.getDate();

  // use EJS render to display the day and the To Do List
  res.render("list", { listTitle: day, newListItems: items });
});

// display default to do list on the default root folder
app.post("/", function (req, res) {
  // code allows items to be added to the regular list and work list
  let item = req.body.newItem;

  // if route is /work, add to work list
  // if list === Fun then go to /fun
  // if list ==== Weekend then go to /weekend

  if (req.body.list === "Personal") {
    personal.push(item);
    res.redirect("/Personal");
  } 
  else if (req.body.list === "Zodiac") {
    zodiac.push(item);
    res.redirect("/Zodiac");
  } 
  else {
    items.push(item);
    res.redirect("/");
  }
});

// display Personal to do list on the localhost:3000/work route!
app.get("/Personal", function (req, res) {
  let day = date.getDate();

  res.render("list", {
    listTitle: "Personal To-Do List",
    newListItems: personal,
  });
});

// display Zodiac to do list on the localhost:3000/work route!
app.get("/Zodiac", function (req, res) {
  let day = date.getDate();

  res.render("list", {
    listTitle: "Zodiac To-Do List",
    newListItems: zodiac,
  });
});

// add a app.get for every route - /fun and /weekend
// Make sure your listTitle starts off with Fun Items and Weekend Items

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
