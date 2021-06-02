const express = require("express");

const welcomeRouter = express.Router();
// localhost:8000/products
// endpoint => /products
// localhost:8000/
// endpoint => /

// membuat handler untuk endpoint /
welcomeRouter.get("/", (_, res) => {
  res.send("API HOMEPAGE");
});

module.exports = welcomeRouter;
