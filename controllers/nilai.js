const nilaiModel = require("../models/nilai");

module.exports = {
  postNilai: (req, res) => {
    const { body } = req;
    nilaiModel
      .postNilai(body)
      .then(() => {
        res.status(200).json({
          msg: "Success Add",
          data_nilai: {
            nim: body.nim,
            id_matkul: body.id_matkul,
            nidn: body.nidn,
            nilai: body.nilai,
            keterangan: body.keterangan,
          },
        });
      })
      .catch((err) => {
        res.status(500).json({
          msg: `Failed Add`,
          err,
        });
      });
  },
  updateNilai: (req, res) => {
    const { id } = req.params;
    const { body } = req;
    nilaiModel
      .updateNilai(body, id)
      .then(() => {
        res.status(200).json({
          msg: "Success Update",
          data_nilai: {
            nim: body.nim,
            id_matkul: body.id_matkul,
            nidn: body.nidn,
            nilai: body.nilai,
            keterangan: body.keterangan,
          },
        });
      })
      .catch((err) => {
        res.status(500).json({
          msg: `Failed Update`,
          err,
        });
      });
  },
  deleteNilai: (req, res) => {
    const { id } = req.params;
    nilaiModel
      .deleteNilai(id)
      .then(() => {
        res.status(200).json({
          msg: "Success Delete",
        });
      })
      .catch((err) => {
        res.status(500).json({
          msg: `Failed Delete`,
          err,
        });
      });
  },
  getAllNilai: (req, res) => {
    nilaiModel
      .getAllNilai()
      .then((data) => {
        res.status(200).json({
          msg: "Success",
          data,
        });
      })
      .catch((err) => {
        res.status(500).json({
          msg: `Failed`,
          err,
        });
      });
  },
  getNilaiRata: (req, res) => {
    nilaiModel
      .getNilaiRata()
      .then((data) => {
        res.status(200).json({
          msg: "Success",
          data,
        });
      })
      .catch((err) => {
        res.status(500).json({
          msg: `Failed`,
          err,
        });
      });
  },
  getNilaiJurusan: (req, res) => {
    nilaiModel
      .getNilaiJurusan()
      .then((data) => {
        res.status(200).json({
          msg: "Success",
          data,
        });
      })
      .catch((err) => {
        res.status(500).json({
          msg: `Failed`,
          err,
        });
      });
  },
};
