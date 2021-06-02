const authModel = require("../models/auth");

module.exports = {
  registerMahasiswa: (req, res) => {
    const { body } = req;
    authModel
      .postNewUser(body)
      .then(() => {
        res.status(200).json({
          msg: "Register Success",
          data_user: {
            email: body.email,
          },
        });
      })
      .catch((err) => {
        res.status(500).json({
          msg: `Register Failed`,
          err,
        });
      });
  },
 
  login: (req, res) => {
    const { body } = req;
    authModel
      .postLogin(body)
      .then((data) => {
        res.status(200).json({
          msg: `Login Succes`,
          data,
        });
      })
      .catch((err) => {
        res.status(500).json({
          msg: `Login Failed`,
          err,
        });
      });
  },
};
