const instructoresDAO = require("../../DAO/instructoresDAO");

async function crearInstructor(req, res) {
    try {
        let data = await instructoresDAO.crearInstructor(req.body);
        res.status(200).json(data);
    } catch (err) {
        return res.status(500).json({ status: 500, message: err.message });
    }
}

async function obtenerInstructor(req, res) {
    try {
        const body = Object.keys(req.body).length === 0 ? undefined : req.body;
        let data = await instructoresDAO.obtenerInstructor(body);
        res.status(200).json(data);
    } catch (err) {
        return res.status(500).json({ status: 500, message: err.message });
    }
}

async function actualizarInstructor(req, res) {
    try {
        let data = await instructoresDAO.actualizarInstructor(req.body);
        res.status(200).json(data);
    } catch (err) {
        return res.status(500).json({ status: 500, message: err.message });
    }
}

async function eliminarInstructor(req, res) {
    try {
        const body = Object.keys(req.body).length === 0 ? undefined : req.body;
        let data = await instructoresDAO.eliminarInstructor(body);
        res.status(200).json(data);
    } catch (err) {
        return res.status(500).json({ status: 500, message: err.message });
    }
}

module.exports = {
    crearInstructor,
    obtenerInstructor,
    actualizarInstructor,
    eliminarInstructor
}