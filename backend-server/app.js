var express = require("express");
var cors = require("cors");
var path = require("path");
var cookieParser = require("cookie-parser");
require("dotenv").config();
var createError = require("http-errors");

console.log("Supabase URL:", process.env.SUPABASE_URL);
console.log(
  "Supabase Key:",
  process.env.SUPABASE_ANON_KEY ? "Key is set" : "Key is missing"
);

var app = express();

const contactRouter = require("./api/contact");
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());
// var corsOptions = {
//   origin: "*",
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   allowedHeaders: ["Content-Type", "Authorization"],
// };

// app.use(cors(corsOptions));

app.use("/contact", contactRouter);

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
