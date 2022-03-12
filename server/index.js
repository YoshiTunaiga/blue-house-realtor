const express = require("express");
const path = require("path");
const volleyball = require("volleyball");

const app = express();

const debug = process.env.NODE_ENV === "test";
app.use(volleyball.custom({ debug }));

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes ...medRouter.
app.use("/api", require("./api")); // include our routes!

// static middleware
app.use(express.static(path.join(__dirname, "../public")));

// any remaining requests with an extension (.js, .css, etc.) send 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error("Not found");
    err.status = 404;
    next(err);
  } else {
    next();
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
}); // Send index.html for any other requests

// error handling middleware
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV !== "test") console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error");
});

module.exports = app;
