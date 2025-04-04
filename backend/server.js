const express = require("express");
const mysql = require("mysql2");
const cors =require("cors");

const PORT = 5001;
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "klarinett",
    database: "training_db"
});

app.get("/users", (req, res) => {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results);
    });
  });

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});