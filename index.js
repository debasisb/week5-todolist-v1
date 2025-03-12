//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// set an array for the default items in the list
let items = [
  "First Name: Macy",
  "Last Name: Ferguson",
  "State: Hawaii",
  "Country: USA",
];
// set an empty array for personal items
let personalItems = [
  "First Name: Macy",
  "Last Name: Ferguson",
  "Zodiac: Gemini",
  "Birthstone: Emerald",
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

  // if route is /Personal, add to personal list
  // if list === zodiac then go to /Zodiac
  // if list ==== Weekend then go to /weekend

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

// display default to do list on the localhost:3000/work route!
app.get("/work", function (req, res) {
  let day = date.getDate();

  res.render("list", {
    listTitle: "Work Items To-Do List",
    newListItems: workItems,
  });
});

// add a app.get for every route - /fun and /weekend
// Make sure your listTitle starts off with Fun Items and Weekend Items

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
