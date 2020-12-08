const express = require("express");
const { getData, insertData } = require("../DB/Database");

const app = express();
const PORT = 3000;

// sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
/* app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars"); */

//  Create a new character - takes in JSON input

app.get("/api/tables", function (req, res) {
  getData()
    .then(function (dbData) {
      console.log("dbData 1 =", dbData);
      res.json(dbData);
    })
    .catch(function (err) {
      console.log("woops", err);
    });
});

app.post("/api/reserve", function (req, res) {
  const newBooking = req.body;
  insertData(newBooking)
    .then(function () {
      res.json({ sucess: true });
    })
    .catch(function (err) {
      res.json({ sucess: false });
    });
});

app.use("/", express.static("../Client"));

app.listen(PORT, function () {
  console.log("Server is listening on Port ", PORT);
});
