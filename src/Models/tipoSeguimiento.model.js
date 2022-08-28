const { Sequelize, DataTypes } = require('sequelize')
const sequelizeCrm = require('../config/sequelize.crm')

const tipoSeguimientos = sequelizeCrm.define("cat_tipo_seguimiento", {
    idtipoSeguimiento: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },

    descripcion: {
        type: DataTypes.STRING
    },
    activo: {
        type: DataTypes.INTEGER
    },
}, {
    timestamps: false
})

module.exports = tipoSeguimientos;