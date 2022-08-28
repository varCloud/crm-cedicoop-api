const clienteDAO = require("../../DAO/clienteDAO");

async function crearCliente(req, res) {
    try {
        let data = await clienteDAO.crearCliente(req.body);
        res.status(200).json(data);
    } catch (err) {
        return res.status(500).json({ status: 500, message: err.message });
    }
}


async function obtenerCliente(req, res) {
    try {
        const body = Object.keys(req.body).length === 0 ? undefined : req.body;
        let data = await clienteDAO.obtenerCliente(body);
        res.status(200).json(data);
    } catch (err) {
        return res.status(500).json({ status: 500, message: err.message });
    }
}

async function actualizarCliente(req, res) {
    try {
        let data = await clienteDAO.actualizarCliente(req.body);
        res.status(200).json(data);
    } catch (err) {
        return res.status(500).json({ status: 500, message: err.message });
    }
}

async function eliminarCliente(req, res) {
    try {
        const body = Object.keys(req.body).length === 0 ? undefined : req.body;
        let data = await clienteDAO.eliminarCliente(body);
        res.status(200).json(data);
    } catch (err) {
        return res.status(500).json({ status: 500, message: err.message });
    }
}

module.exports = {
    crearCliente,
    obtenerCliente,
    actualizarCliente,
    eliminarCliente
}