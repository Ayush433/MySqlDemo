const connection = require("./connection");
const express = require("express");
const bodyParse = require("body-parser");
const app = express();

app.use(bodyParse.json());

app.get("/user/:id", (req, res) => {
  console.log("first", req.params.id);
  connection.query(
    "SELECT * FROM user WHERE id=?",
    [req.params.id],
    (err, rows) => {
      if (err) {
        console.log("Error");
      } else {
        console.log(rows);
        res.send(rows);
      }
    }
  );
});

app.listen(300, () => console.log("Express Server is running on port 3000"));
