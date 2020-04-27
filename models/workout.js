const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,

    },

    exercises: [
        {
            type: {
                type: String
            },
            name: {
                type: String
            },
            duration: {
                type: Number
            },
            weight: {
                type: String
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            }
        }
    ]

})



const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;