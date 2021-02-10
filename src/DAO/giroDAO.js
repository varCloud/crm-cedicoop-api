const db = require("../config/database");

async function generar(postData) {
    let response = {};
    try {

        let sql = `CALL ENVNAC_SP_OBTENER_NACIONALIDADES ()`;
        let result = await db.query(sql,
            [
                /*remitente*/
                postData.remitente.nombres,
                postData.remitente.primerApellido,
                postData.remitente.segundoApellido,
                postData.remitente.idGenero,
                postData.remitente.fechaNacimiento,
                postData.remitente.idNacionalidad,
                postData.remitente.idOcupacion,
                postData.remitente.telefono,
                postData.remitente.email,
                /*domicilioRemitente*/
                postData.domicilioRemitente.calle,
                postData.domicilioRemitente.numeroExt,
                postData.domicilioRemitente.numeroInt,
                postData.domicilioRemitente.colonia,
                postData.domicilioRemitente.codigoPostal,
                postData.domicilioRemitente.municipio,
                postData.domicilioRemitente.entidadFederativa,
                postData.domicilioRemitente.pais,
                /*identificacion*/
                postData.identificacion.idTipoIdentificacion,
                postData.identificacion.fechaExpiracion,
                postData.identificacion.numeroIdentificacion,
                /*destinatario*/
                postData.destinatario.nombres,
                postData.destinatario.primerApellido,
                postData.destinatario.segundoApellido,
                postData.destinatario.telefono,
                postData.destinatario.entidadFederativa,
                postData.destinatario.ciudad,
                /*transaccion*/
                postData.transaccion.idCadenaComercial,
                postData.transaccion.numeroSucursal,
                postData.transaccion.monto,
                postData.transaccion.idCadenaComercialDestinatario,
                postData.transaccion.idSucursalDestinatario,
                /*dataAdicional*/
                postData.dataAdicional.data

            ]);
        response = JSON.parse(JSON.stringify(result[0][0]));
        if (response.estatus == 200) {
            response.nacionalidades = JSON.parse(JSON.stringify(result[1]));
        }
        return response;
    } catch (ex) {
        throw ex;
    }
}

async function consultar(postData) {
    let response = {};
    try {
        let sql = `CALL ENVNAC_SP_OBTENER_NACIONALIDADES ()`;
        let result = await db.query(sql, [postData.folioTransaccion])
        response = JSON.parse(JSON.stringify(result[0][0]));
        if (response.estatus == 200) {
            response.nacionalidades = JSON.parse(JSON.stringify(result[1]));
        }
        return response;
    } catch (ex) {
        throw ex;
    }
}

async function aprovisionarCobro(postData) {

    let response = {};
    try {
        let sql = `CALL ENVNAC_SP_OBTENER_NACIONALIDADES ()`;
        let result = await db.query(sql, [
            postData.folioTransaccion,
            postData.idCadenaComercial,
            postData.idSucursal
        ])
        response = JSON.parse(JSON.stringify(result[0][0]));
        if (response.estatus == 200) {
            response.nacionalidades = JSON.parse(JSON.stringify(result[1]));
        }
        return response;
    } catch (ex) {
        throw ex;
    }
}

async function cobrar(postData) {

    let response = {};
    try {
        let sql = `CALL ENVNAC_SP_OBTENER_NACIONALIDADES ()`;
        let result = await db.query(sql, [
            postData.transaccion.folioTransaccion,
            postData.transaccion.numeroSucursal,
            postData.transaccion.otpTransaccion,
            postData.destinatario.primerNombre,
            postData.destinatario.segundoNombre,
            postData.destinatario.primerApellido,
            postData.destinatario.segundoApellido,
            postData.destinatario.telefono,
            postData.destinatario.estado,
            postData.destinatario.entidadFederativa,
            postData.dataAdicional.data
        ])
        response = JSON.parse(JSON.stringify(result[0][0]));
        if (response.estatus == 200) {
            response.nacionalidades = JSON.parse(JSON.stringify(result[1]));
        }
        return response;
    } catch (ex) {
        throw ex;
    }
}

async function cancelar(postData) {

    let response = {};
    try {
        let sql = `CALL ENVNAC_SP_OBTENER_NACIONALIDADES ()`;
        let result = await db.query(sql, [
            postData.transaccion.folioTransaccion,
            postData.transaccion.idCadenaComercial,
            postData.transaccion.idSucursal,
            postData.remitente.primerNombre,
            postData.remitente.segundoNombre,
            postData.remitente.primerApellido,
            postData.remitente.segundoApellido

        ])
        response = JSON.parse(JSON.stringify(result[0][0]));
        if (response.estatus == 200) {
            response.nacionalidades = JSON.parse(JSON.stringify(result[1]));
        }
        return response;
    } catch (ex) {
        throw ex;
    }
}

async function actualizar(postData) {

    let response = {};
    try {
        let sql = `CALL ENVNAC_SP_OBTENER_NACIONALIDADES ()`;
        let result = await db.query(sql, [
            /*transaccion*/
            postData.transaccion.folioTransaccion,
            postData.transaccion.idCadenaComercial,
            postData.transaccion.idSucursal,
            postData.transaccion.otpTransaccion,
            /*remitente*/
            postData.remitente.primerNombre,
            postData.remitente.segundoNombre,
            postData.remitente.primerApellido,
            postData.remitente.segundoApellido,
            /*destinatario*/
            postData.destinatario.primerNombre,
            postData.destinatario.segundoNombre,
            postData.destinatario.primerApellido,
            postData.destinatario.segundoApellido,

        ])
        response = JSON.parse(JSON.stringify(result[0][0]));
        if (response.estatus == 200) {
            response.nacionalidades = JSON.parse(JSON.stringify(result[1]));
        }
        return response;
    } catch (ex) {
        throw ex;
    }
}

async function aprovisionarActualiza(postData) {

    let response = {};
    try {
        let sql = `CALL ENVNAC_SP_OBTENER_NACIONALIDADES ()`;
        let result = await db.query(sql, [
            /*transaccion*/
            postData.transaccion.folioTransaccion,
            postData.transaccion.idCadenaComercial,
            postData.transaccion.idSucursal,
            /*remitente*/
            postData.remitente.primerNombre,
            postData.remitente.segundoNombre,
            postData.remitente.primerApellido,
            postData.remitente.segundoApellido,
            /*destinatario*/
            postData.destinatario.primerNombre,
            postData.destinatario.segundoNombre,
            postData.destinatario.primerApellido,
            postData.destinatario.segundoApellido,

        ])
        response = JSON.parse(JSON.stringify(result[0][0]));
        if (response.estatus == 200) {
            response.nacionalidades = JSON.parse(JSON.stringify(result[1]));
        }
        return response;
    } catch (ex) {
        throw ex;
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