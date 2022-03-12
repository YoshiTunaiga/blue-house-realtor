const router = require("express").Router();

// router.use('/login', require('./login'));
router.use("/users", require("./users"));

//In case user requests an API route that doesnt exist
//api/sloths
router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});

module.exports = router;
