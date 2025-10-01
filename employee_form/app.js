const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

let employees = [];

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/add-employee", (req, res) => {
  const { name, age, department, designation, salary, location } = req.body;

  if (!name || !age || !department || !designation || !salary || !location) {
    return res.send("All fields are required!");
  }

  const newEmployee = { name, age, department, designation, salary, location };
  employees.push(newEmployee);

  res.redirect("/employees");
});

app.get("/employees", (req, res) => {
  res.render("employees", { employees });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
