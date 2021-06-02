const db = require("../config/db");

module.exports = {
  postNilai: (body) => {
    return new Promise((resolve, reject) => {
      const qs = "INSERT INTO nilai SET ?";
      db.query(qs, body, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
          console.log(err)
        }
      });
    });
  },
  updateNilai: (body, id) => {
    return new Promise((resolve, reject) => {
      const qs = "UPDATE nilai SET ? WHERE id = ?";
      db.query(qs, [body, id], (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  deleteNilai: (id) => {
    return new Promise((resolve, reject) => {
      const qs = "DELETE FROM nilai WHERE id = ?";
      db.query(qs, id, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  getAllNilai: () => {
    return new Promise((resolve, reject) => {
      let qs = `SELECT n.id, m.nim, m.nama, TIMESTAMPDIFF(YEAR,m.tanggal_lahir,CURDATE()) AS umur, m.jurusan, d.nama AS dosen, mk.nama AS mata_kuliah, n.nilai, n.keterangan 
      FROM mahasiswa AS m 
      JOIN nilai AS n ON n.nim = m.nim 
      JOIN dosen AS D ON n.nidn = d.nidn 
      JOIN mata_kuliah AS mk ON n.id_matkul = mk.id `;
      db.query(qs, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  getNilaiRata: () => {
    return new Promise((resolve, reject) => {
      let qs = `SELECT n.id, m.nim, m.nama, m.jurusan, avg(n.nilai) as average_score
      FROM mahasiswa AS m 
      JOIN nilai AS n ON n.nim = m.nim
      GROUP BY m.nama`;
      db.query(qs, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  getNilaiJurusan: () => {
    return new Promise((resolve, reject) => {
      let qs = `SELECT n.id, m.jurusan, avg(n.nilai) as average_score
      FROM mahasiswa AS m 
      JOIN nilai AS n ON n.nim = m.nim
      GROUP BY m.jurusan`;
      db.query(qs, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
};
