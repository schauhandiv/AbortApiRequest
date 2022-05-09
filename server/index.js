const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

//retieving posts
app.get("/", (req, res) => {
  setTimeout(() => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify("GET success"));
  }, 5000);
});

app.post("/", (req, res) => {
  setTimeout(() => {
    console.log('req... ',req.body);
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify("POST success"));
  }, 5000);
});

app.listen(4001, () => {
  console.log("post service listening at 4001");
});
