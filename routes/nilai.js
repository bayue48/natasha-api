const nilaiRouter = require("express").Router();

const nilaiController = require("../controllers/nilai");
const auth = require("../middlewares/auth");

nilaiRouter.post("/", auth.isLogin, auth.isDosen, nilaiController.postNilai);
nilaiRouter.patch("/:id", auth.isLogin, auth.isDosen, nilaiController.updateNilai);
nilaiRouter.delete("/:id", auth.isLogin, auth.isDosen, nilaiController.deleteNilai);
nilaiRouter.get("/all", nilaiController.getAllNilai)
nilaiRouter.get("/rata", nilaiController.getNilaiRata)
nilaiRouter.get("/jurusan", nilaiController.getNilaiJurusan)

module.exports = nilaiRouter;
