var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

mongoose.connect("mongodb://localhost:27017/mydb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
var db = mongoose.connection;
db.on("error", () => console.log("Error in Connecting to Database"));
db.once("open", () => console.log("Connected to Database"));

app.get("/", (req, res) => {
  res.set({ "Allow-access-Allow-Origin": "*" });
  return res.sendFile(path.join(__dirname + "/public/index.html"));

});

app.post("/submit", async (req, res) => {
  try {
    var category = req.body.category;
    var model = req.body.model;
    var serialNumber = req.body.serialNumber;
    var date = req.body.date;
    var file = req.body.file;

    console.log(category);
    console.log(model);
    console.log(serialNumber);
    console.log(date);
    console.log(file);

    var data = {
      category: category,
      model: model,
      serialNumber: serialNumber,
      date: date,
      file: file,
    };

    db.collection("values").insertOne(data, (err, collection) => {
      if (err) {
        throw err;
      }
      console.log("Record Inserted Successfully");
    });

    return res.redirect("result.html");
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(port, () => {
  console.log(`Listening to the port no: ${port}`);
});
