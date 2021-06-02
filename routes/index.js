const express = require("express");

const mainRouter = express.Router();

const welcomeRouter = require("./welcome");
const authRouter = require("./auth");
const nilaiRouter = require("./nilai");

mainRouter.use("/", welcomeRouter); // localhost:8000
mainRouter.use("/auth", authRouter); // localhost:8000/auth
mainRouter.use("/nilai", nilaiRouter)

module.exports = mainRouter;