const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");
const path = require("path");
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});
const PORT = process.env.PORT || 3000;
const Workout = require("./models/workout");
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

app.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

app.get("/api/workouts", (req, res) => {
    Workout.find({}, (error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.json(data);
        }
    });
})

app.put("/api/workouts/:id", ({ params }, res) => {
    Workout.update(
        {
            _id: mongojs.ObjectId(params.id)
        },
        {
            $set: {
                read: true
            }
        },

        (error, edited) => {
            if (error) {
                console.log(error);
                res.send(error);
            } else {
                console.log(edited);
                res.send(edited);
            }
        }
    );
});
app.listen(3000, () => {
    console.log(`App running on ${PORT}`);
});
