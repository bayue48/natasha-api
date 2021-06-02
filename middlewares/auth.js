const jsonwebtoken = require("jsonwebtoken");
const db = require('../config/db')

module.exports = {
  isRegistered: (req, res, next) => {
    const { email } = req.body;
    return new Promise((resolve, reject) => {
      const qs = "SELECT email FROM users WHERE email = ?";
      db.query(qs, email, (err, data) => {
        if (!err) {
          if (!data[0]) {
            resolve("Success");
          } else {
            reject("Email already in use!");
          }
        } else {
          reject("Empty Field");
        }
      });
    })
      .then(() => {
        next();
      })
      .catch((err) => {
        res.status(401).json({
          msg: `invalid`,
          err,
        });
      });
  },
  isLogin: (req, res, next) => {
    const bearerToken = req.header("authorization");
    if (!bearerToken) {
      res.status(401).json({
        msg: `Please login first`,
      });
    } else {
      const token = bearerToken.split(" ")[1];
      try {
        const decodedToken = jsonwebtoken.verify(token, process.env.SECRET_KEY);
        req.decodedToken = decodedToken;
        next();
      } catch (err) {
        res.status(401).json({
          msg: `Token invalid`,
        });
      }
    }
  },
  isDosen: (req, res, next) => {
    const { role } = req.decodedToken;
    if (role !== "dosen") {
      res.status(401).json({
        msg: `You are not Login as Dosen.`,
      });
    } else {
      next();
    }
  },
};
