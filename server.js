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
    //     res.render("signup", { data: "" });
    //   });

    // db.on("error", error => {
    //   console.log("Database Error:", error);
    // });

    // app.post("/submit", ({ body }, res) => {
    //   const book = body;

    //   book.read = false;

    //   db.books.save(book, (error, saved) => {
    //     if (error) {
    //       console.log(error);
    //     } else {
    //       res.send(saved);
    //     }
    //   });
    // });

    // app.get("/read", (req, res) => {
    //   db.books.find({ read: true }, (error, found) => {
    //     if (error) {
    //       console.log(error);
    //     } else {
    //       res.json(found);
    //     }
    //   });
    // });

    // app.get("/unread", (req, res) => {
    //   db.books.find({ read: false }, (error, found) => {
    //     if (error) {
    //       console.log(error);
    //     } else {
    //       res.json(found);
    //     }
    //   });
    // });

    // app.put("/markread/:id", ({ params }, res) => {
    //   db.books.update(
    //     {
    //       _id: mongojs.ObjectId(params.id)
    //     },
    //     {
    //       $set: {
    //         read: true
    //       }
    //     },

    //     (error, edited) => {
    //       if (error) {
    //         console.log(error);
    //         res.send(error);
    //       } else {
    //         console.log(edited);
    //         res.send(edited);
    //       }
    //     }
    //   );
    // });

    // app.put("/markunread/:id", ({ params }, res) => {
    //   db.books.update(
    //     {
    //       _id: mongojs.ObjectId(params.id)
    //     },
    //     {
    //       $set: {
    //         read: false
    //       }
    //     },

    //     (error, edited) => {
    //       if (error) {
    //         console.log(error);
    //         res.send(error);
    //       } else {
    //         console.log(edited);
    //         res.send(edited);
    //       }
    //     }
    //   );
});

app.listen(3000, () => {
    console.log(`App running on ${PORT}`);
});
