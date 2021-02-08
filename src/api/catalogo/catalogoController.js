


async function nacionalidades(req, res) {
    try {
        res.status(200).json({ status: 200, message: "Correct access to service" });
    } catch (err) {
        res.status(500).json({ status: 500, message: "Error internal server" });
    }
}

async function ocupaciones(req, res) {
    try {
        res.status(200).json({ status: 200, message: "Correct access to service" });
    } catch (err) {
        res.status(500).json({ status: 500, message: "Error internal server" });
    }
}

async function tiposIdentificaciones(req, res) {
    try {
        res.status(200).json({ status: 200, message: "Correct access to service" });
    } catch (err) {
        res.status(500).json({ status: 500, message: "Error internal server" });
    }
}

async function genero(req, res) {
    try {
        res.status(200).json({ status: 200, message: "Correct access to service" });
    } catch (err) {
        res.status(500).json({ status: 500, message: "Error internal server" });
    }
}

async function cadenasComerciales(req, res) {
    try {
        res.status(200).json({ status: 200, message: "Correct access to service" });
    } catch (err) {
        res.status(500).json({ status: 500, message: "Error internal server" });
    }
}

async function sucursalesCadenaComercial(req, res) {
    try {
        res.status(200).json({ status: 200, message: "Correct access to service" });
    } catch (err) {
        res.status(500).json({ status: 500, message: "Error internal server" });
    }
}

module.exports = {
    nacionalidades,
    ocupaciones,
    tiposIdentificaciones,
    genero,
    cadenasComerciales,
    sucursalesCadenaComercial
}