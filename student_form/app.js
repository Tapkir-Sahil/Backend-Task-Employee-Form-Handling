const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

const students = [
  { name: "Aarav Mehta", rollNo: "101", course: "ExpressJS", batch: "10-12 AM" },
  { name: "Riya Sharma", rollNo: "102", course: "MongoDB", batch: "12-3 PM" },
  { name: "Rohit Patil", rollNo: "103", course: "NodeJS", batch: "2:30-4:30 PM" },
  { name: "Neha Kulkarni", rollNo: "104", course: "EJS", batch: "5-6 PM" }
];


app.get("/", (req, res) => {
  res.render("pages/home");
});

app.get("/students", (req, res) => {
  res.render("pages/students", { students });
});

app.get("/contact", (req, res) => {
  res.render("pages/contact");
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
