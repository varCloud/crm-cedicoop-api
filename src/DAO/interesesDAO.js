

const interesesModel = require('../Models/intereses.model');
const { Op , sequelize} = require("sequelize");

class interesesDAO {

    async crearInteres(interes) {
        try {
            await interesesModel.create(interes)
            let interesActual = await interesesModel.findOne({
                order: [
                    ['idCatInteres', 'DESC']
                ]
            })
            return interesActual;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new interesesDAO();