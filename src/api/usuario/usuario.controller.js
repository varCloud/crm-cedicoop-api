const usuarioDAO = require("../../DAO/usuarioDAO");
const configGlobal = require('../../config/config');


async function crearUsuario(req, res) {
    try {

        let data = await usuarioDAO.crearUsuario(req.body);
        res.status(200).json(data);

    } catch (err) {
        return res.status(500).json({ status: 500, message: err.message });
    }
}


async function obtenerUsuarios(req, res) {
    try {

        const body = Object.keys(req.body).length === 0 ? undefined : req.body;
        let data = await usuarioDAO.obtenerUsuarios(body);
        res.status(200).json(data);

    } catch (err) {
        return res.status(500).json({ status: 500, message: err.message });
    }
}

async function eliminarUsuario(req, res) {
    try {
        
        const body = Object.keys(req.body).length === 0 ? undefined : req.body;
        let data = await usuarioDAO.eliminarUsuario(body);
        res.status(200).json(data);

    } catch (err) {
        return res.status(500).json({ status: 500, message: err.message });
    }
}

async function actualizarUsuario(req, res) {
    try {

        let data = await usuarioDAO.actualizarUsuario(req.body);
        res.status(200).json(data);

    } catch (err) {
        return res.status(500).json({ status: 500, message: err.message });
    }
}


module.exports = {
    crearUsuario,
    obtenerUsuarios,
    actualizarUsuario,
    eliminarUsuario

}