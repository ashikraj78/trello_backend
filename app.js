var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// dotenv configuration
require("dotenv").config();

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var teamsRouter = require("./routes/teams");
var boardsRouter = require("./routes/boards");
var cardsRouter = require("./routes/cards");
var commentsRouter = require("./routes/comments");
var labelsRouter = require("./routes/labels");
var listsRouter = require("./routes/lists");

var app = express();
app.use(express.static("build"));

// connect to mongo-db

mongoose.connect(
  process.env.MONGO_DB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log("connected", err ? err : true);
  }
);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
var authMiddleware = require("./middleware/authMiddleware");

app.use("/api/v1/", indexRouter);
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/teams", authMiddleware.identifyUser, teamsRouter);
app.use("/api/v1/boards", authMiddleware.identifyUser, boardsRouter);
app.use("/api/v1/cards", authMiddleware.identifyUser, cardsRouter);
app.use("/api/v1/comments", commentsRouter);
app.use("/api/v1/labels", labelsRouter);
app.use("/api/v1/lists", authMiddleware.identifyUser, listsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
