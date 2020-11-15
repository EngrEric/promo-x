const createError = require("http-errors");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const router = require("./routes/index");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.options("*", cors());

app.use("/", router);

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

mongoose
  .connect("mongodb://127.0.0.1:27017/joyup", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(5000, () => {
      console.log("server started @ localhost:5000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
