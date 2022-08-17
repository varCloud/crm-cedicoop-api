const interesesDAO = require("../../DAO/interesesDAO");

async function crearInteres(req, res) {
    try {
        //logica de negocio
        let data = await interesesDAO.crearInteres(req.body);
        res.status(200).json(data);

    } catch (err) {
        return res.status(500).json({ status: 500, message: err.message });
    }
}

module.exports = {
    crearInteres
}