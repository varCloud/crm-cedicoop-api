const giroDAO = require("../../DAO/giroDAO");

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
        let data = await giroDAO.consultar(postData);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ status: 500, message: "Error internal server" });
    }
}

async function aprovisionarCobro(req, res) {
    try {
        postData = req.body
        let data = await giroDAO.aprovisionarCobro(postData);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ status: 500, message: "Error internal server" });
    }
}

async function cobrar(req, res) {
    try {
        postData = req.body
        let data = await giroDAO.cobrar(postData);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ status: 500, message: "Error internal server" });
    }
}

async function cancelar(req, res) {
    try {
        postData = req.body
        let data = await giroDAO.cancelar(postData);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ status: 500, message: "Error internal server" });
    }
}

async function actualizar(req, res) {
    try {
        postData = req.body
        let data = await giroDAO.actualizar(postData);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ status: 500, message: "Error internal server" });
    }
}

async function aprovisionarActualiza(req, res) {
    try {
        postData = req.body
        let data = await giroDAO.aprovisionarActualiza(postData);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ status: 500, message: "Error internal server" });
    }
}


module.exports = {
    generar,
    consultar,
    aprovisionarCobro,
    cobrar,
    cancelar,
    actualizar,
    aprovisionarActualiza
}