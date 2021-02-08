const winston = require("../../config/winston");
const tokenDAO = require("../../DAO/tokenDAO");
const utils = require("../Utilerias/utils")
var jwt = require('jsonwebtoken');
const configGlobal = require('../../config/config');
var jwtClave = configGlobal.JWT_KEY;
var jwtTiempoToken = 60 * 60 * 24; // expires in 24 hours
var netweyApi = require("../../netwey/netwey")


async function generateToken(req, res) {
    try {
        const { user, password } = req.body;
        const postData = req.body;
        if (Object.keys(postData).length == 0) {
            res.status(404).json({ status: 401, message: "Parametros de entrada no validos" });
        }

        //var usuarioKey = await tokenDAO.generateToken(req.body)
        //console.log("usuario key ::::::::", usuarioKey.model.middlewareApiKey)

        //if (usuarioKey.status == 200) { //si las contraseñas son validas a nivel de base de datos
            var tokenData = {
                usuario: user,
                contrasena: password,
                idCustomer: 1,//usuarioKey.model.idCustomer,
                middlewareApiKey: "sdg5sd+g5sdhs56+",//usuarioKey.model.middlewareApiKey
            }

            var token = jwt.sign(tokenData, jwtClave, {
                expiresIn: jwtTiempoToken
            })
            res.status(200).json({ status: 200, token: token, message: "Token generado correctamente." });
            /*else {
                res.status(401).json({ estatus: 401, mensaje: "Credenciales incorrectas o vencidas." });
            }*/
        //} else {
         //   res.status(404).json({ status: 500, message: "Error al consumir el api, verifique los datos enviados." })
        //}
    } catch (err) {
        res.status(500).json({ status: 500, message: "Error interno del servidor" });
    }
}


async function validateToken(request, response, next) {
    try {
        winston.info("Token: " + request.headers['authorization-pp']);
        var token = request.headers['authorization-pp']
        var result = { estatus: -1, mensaje: " " }
        let usuario = {}
        if (!token) {
            result.mensaje = "Es necesario el token de autenticación"
            return response.status(401).json(result);
        }
        if (!token.includes("Bearer-PP")) {
            result.mensaje = "Es necesario el portador de autenticación"
            return response.status(401).json(result);
        }
        token = token.replace('Bearer-PP ', '')

        jwt.verify(token, jwtClave, function (err, user) {
            if (err) {
                result.mensaje = "JWT Token invalido";
                return response.status(401).json(result);
            } else {
                usuario = user
                usuario.postData = request.body
                result.mensaje = "JWT Token valido"
                result.estatus = 200;
            }
        });
        //var resulValidToken = await tokenDAO.validateToken(usuario); ///validación de token
        //if (resulValidToken.status == 200) {
            return next();
        //} else {
        //   return response.status(500).json({ status: 500, message: resulValidToken.message || "Token invalido" });
       // }
    } catch (err) {
        return response.status(500).json({ status: 500, message: "Error interno del servidor" });
    }
}

module.exports = {
    generateToken,
    validateToken
}