'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('mahasiswas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nim: {
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.STRING
      },
      tanggal_lahir: {
        type: Sequelize.DATEONLY
      },
      jurusan: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('mahasiswas');
  }
};