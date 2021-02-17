const giroDAO = require("../../DAO/giroDAO");
const utlis = require("../utilerias/utils")

/*********** Estatus de transacción ********
1.- Registrada
2.- Declinada
3.- Aprovisionada
4.- Cobrada
*/


async function generar(req, res) {
    try {
        postData = req.body
        postData.usuario = req.usuario
        let data = await giroDAO.generar(postData);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ status: 500, message: "Error internal server" });
    }
}

async function consultar(req, res) {
    try { 
        postData = req.body
        postData.usuario = req.usuario
        let data = await giroDAO.consultar(postData);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ status: 500, message: "Error internal server" });
    }
}

async function aprovisionar(req, res) {
    try {
        
        postData = req.body
        postData.usuario = req.usuario
        postData.otp = utlis.generarOTP();
        let data = await giroDAO.aprovisionar(postData);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ status: 500, message: "Error internal server" });
    }
}

async function cobrar(req, res) {
    try {
        postData = req.body
        postData.usuario = req.usuario
        let data = await giroDAO.cobrar(postData);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ status: 500, message: "Error internal server" });
    }
}

async function cancelar(req, res) {
    try {
        postData = req.body
        postData.usuario = req.usuario
        let data = await giroDAO.cancelar(postData);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ status: 500, message: "Error internal server" });
    }
}

async function actualizar(req, res) {
    try {
        postData = req.body
        postData.usuario = req.usuario
        let data = await giroDAO.actualizar(postData);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ status: 500, message: "Error internal server" });
    }
}


module.exports = {
    generar,
    consultar,
    aprovisionar,
    cobrar,
    cancelar,
    actualizar,
}