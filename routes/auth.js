const authRouter = require("express").Router();

const authController = require("../controllers/auth");
const auth = require("../middlewares/auth");

authRouter.post(
  "/register",
  auth.isRegistered,
  authController.registerMahasiswa
);
authRouter.post("/login", authController.login);

module.exports = authRouter;
