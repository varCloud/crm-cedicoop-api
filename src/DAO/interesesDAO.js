

const interesesModel = require('../Models/intereses.model');
const { Op , sequelize} = require("sequelize");

class interesesDAO{

    async crearInteres(interes){
        try {
            let interesActual =  await interesesModel.create(interes)
            return interesActual;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new interesesDAO();