const tiposerviciosDAO = require('../../DAO/tiposerviciosDAO')

async function crearTiposervicios(req, res) {
    try {
        let data = await tiposerviciosDAO.crearTiposervicios(req.body)
        res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({ status: 500, message: error.message })
    }
}

async function obtenerTiposervicios(req, res) {
    try {
        const body = Object.keys(req.body).length === 0 ? undefined : req.body
        let data = await tiposerviciosDAO.obtenerTiposervicios(body)
        res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({ status: 500, message: error.message })
    }
}

async function actualizarTiposervicios(req, res) {
    try {
        let data = await tiposerviciosDAO.actualizarTiposervicios(req.body)
        res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({ status: 500, message: error.message })
    }
}

async function eliminarTiposervicios(req, res) {
    try {
        const body = Object.keys(req.body).length === 0 ? undefined : req.body
        let data = await tiposerviciosDAO.eliminarTiposervicios(req.body)
        res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({ status: 500, message: error.message })
    }
}

module.exports = {
    crearTiposervicios,
    obtenerTiposervicios,
    actualizarTiposervicios,
    eliminarTiposervicios
}