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
        let data = await giroDAO.generar(postData);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ status: 500, message: "Error internal server" });
    }
}

async function consultar(req, res) {
    try {
        res.status(200).json({
            status: 200, message: "Giro disponible", model: {
                model: {
                    destinatario: {
                        nombres: "Ulises", primerApellido: "Tellez", segundoApellido: "X", telefono: "4435458574", estado: "Michoacan", ciudad: "Morelia"
                    },
                    transaccion: {
                        cadenaComercial: "Price Shoes", sucursal: "La roma 25", monto: "2500.00", folioTransaccion: "123456789", estatusTransaccion: 3, fechaTransaccion: new Date()
                    }
                }
            }
        });
    } catch (err) {
        res.status(500).json({ status: 500, message: "Error internal server" });
    }
}

async function aprovisionar(req, res) {
    try {
        res.status(200).json({
            status: 200, message: "Se realizo el aprovisionamiento de manera correcta",
            model: {
                folioTransaccion: "123456789", estatusTransaccion: 3, otpTransaccion: "12345"
            }
        });
    } catch (err) {
        res.status(500).json({ status: 500, message: "Error internal server" });
    }
}

async function cobrar(req, res) {
    try {
        res.status(200).json({
            status: 200, message: "El cobro del giro se realizo de manera correcta",
            model: {
                folioTransaccion: "123456789", estatusTransaccion: 4, fechaCobro: new Date()
            }
        });
    } catch (err) {
        res.status(500).json({ status: 500, message: "Error internal server" });
    }
}

module.exports = {
    generar,
    consultar,
    aprovisionar,
    cobrar
}