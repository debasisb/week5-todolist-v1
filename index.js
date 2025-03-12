// jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Set EJS as the view engine
app.set("view engine", "ejs");

// Use body parser to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (CSS, images, etc.)
app.use(express.static("public"));

// List 1 (Personal)
app.get("/Personal", function (req, res) {
  const personalInfo = {
    firstName: "Macy",
    lastName: "Ferguson",
    state: "Hawaii",
    country: "USA",
  };
  res.render("list", {
    listTitle: "Personal Information",
    info: personalInfo,
  });
});

// List 2 (Zodiac)
app.get("/Zodiac", function (req, res) {
  const zodiacInfo = {
    firstName: "Macy",
    lastName: "Ferguson",
    zodiac: "Gemini",
    birthstone: "Emerald",
  };
  res.render("list", {
    listTitle: "Zodiac and Birthstone",
    info: zodiacInfo,
  });
});

// Start the server on port 3000
app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
