const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");
const path = require("path");
// const databaseUrl = "warmup";
// const collections = ["books"];
// const db = mongojs(databaseUrl, collections);
var PORT = 3000;
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/exercise.html"));
});
app.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/stats.html"));


});

app.listen(3000, () => {
    console.log(`App running on ${PORT}`);
});
