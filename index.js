const connection = require("./connection");
const express = require("express");
const bodyParse = require("body-parser");
const dbConfig = require("./Config/db.config");
const app = express();

app.use(bodyParse.json());

var corOptions = {
  origin: "https://localhost:8081",
};

// middleware
app.use(cors(corOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//port

const PORT = process.env.PORT || 8080;

//SERVER
app.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`);
});

// app.get("/user/:id", (req, res) => {
//   console.log("first", req.params.id);
//   connection.query(
//     "SELECT * FROM user WHERE id=?",
//     [req.params.id],
//     (err, rows) => {
//       if (err) {
//         console.log("Error");
//       } else {
//         console.log(rows);
//         res.send(rows);
//       }
//     }
//   );
// });

// app.listen(300, () => console.log("Express Server is running on port 3000"));
