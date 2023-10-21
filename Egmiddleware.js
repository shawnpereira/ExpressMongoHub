module.exports = reqFilter = (req, res, next) => {
  if (!req.query.age) {
    res.send("Enter your age");
  } else if (req.query.age < 18) {
    res.send("You are not eligible");
  } else {
    next();
  }
};
