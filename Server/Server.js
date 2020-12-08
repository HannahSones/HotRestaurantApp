const express = require("express");
const exphbs = require("express-handlebars");
const { getData, insertData} = require("../DB/Database");
const dealWithData = require('./tablesRender');

const app = express();
const PORT = 3000;

// sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars as the default template engine 
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// For the client to sed their data into the server. 
app.post("/api/reserve", function (req, res) {
  const newBooking = req.body;
  insertData(newBooking).then(function(){
    res.json({"sucess": true});
  }).catch(function(err){
    res.json({"sucess": false});
  });
});

// Data = dbData
app.get ("/tables", function (req, res){
  getData().then(function(dbData){
    console.log("dbData 1 =", dbData);
    dealWithData(dbData, res);
    
  })
})

app.use("/", express.static("../Client"));

app.listen(PORT, function () {
  console.log("Server is listening on Port ", PORT);
});

