const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>Api is bloody well running!</h1>");
});

module.exports = router;
