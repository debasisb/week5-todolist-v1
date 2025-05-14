const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Set view engine to EJS
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Arrays
let personalItems = [
  "First Name: Macy",
  "Last Name: Ferguson",
  "Degree: B.A. Applied Business and Information Technology",
  "College: University of Hawaii Maui College",
];

let finalExamItems = [
  "ICS 418: Systems Analy & Dsgn",
  "HUM 400: WI-Changes & Choicese",
  "BUS 495: ABIT Capstone I",
  "ACC 300: Intm Financial Acctg I",
];

// Home route
app.get("/", function (req, res) {
  res.render("list", {
    listTitle: "Personal Information",
    newListItems: personalItems,
  });
});

// Finals route
app.get("/final", function (req, res) {
  res.render("list", {
    listTitle: "Final Exams",
    newListItems: finalExamItems,
  });
});

// Form POST
app.post("/", function (req, res) {
  let item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else if (req.body.list === "Personal") {
    personalItems.push(item);
    res.redirect("/");
  }
});

app.listen(3000, "0.0.0.0", function () {
  console.log("Server started on port 3000");
});
