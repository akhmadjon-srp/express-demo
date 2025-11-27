const express = require("express");
const bodyParser = require("body-parser");
const { Pool } = require("pg");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));


// ----- POSTGRES CONNECTION -----
const db = new Pool({
  host: "localhost",
  user: "postgres",
  password: "123456",   // change if needed
  database: "mynewdb",
  port: 5432
});

// ----- ROUTES -----

// Read (list users)
app.get("/", async (req, res) => {
  const result = await db.query("SELECT * FROM news");
  res.render("index", { news: result.rows });
});

// Create user
app.post("/add", async (req, res) => {
  const { name, email } = req.body;
  await db.query("INSERT INTO users (name, email) VALUES ($1, $2)", [name, email]);
  res.redirect("/");
});app.use(express.static("public"));


// Delete user
app.post("/delete/:id", async (req, res) => {
  await db.query("DELETE FROM users WHERE id = $1", [req.params.id]);
  res.redirect("/");
});

// Start server
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
