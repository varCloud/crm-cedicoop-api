const { Sequelize, DataTypes } = require('sequelize');
const sequelizeCrm = require('../config/sequelize.crm');

const Intereses = sequelizeCrm.define('cat_intereses', {
  idCatInteres: {
    type: DataTypes.INTEGER,
    allowNull: true,
    primaryKey:true
  },

  descripcion: {
    type: DataTypes.STRING
  },

  activo: {
    type: DataTypes.INTEGER
  }
}, {
    timestamps: false
});

module.exports = Intereses;