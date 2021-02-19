const db = require("../config/database");

async function generar(postData) {
    let response = {};
    try {

        let sql = `CALL ENVNAC_SP_GENERAR_GIRO (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
        let result = await db.query(sql,
            [
                /*remitente*/
                postData.remitente.primerNombre,
                postData.remitente.segundoNombre,
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
                postData.domicilioRemitente.ciudad,
                postData.domicilioRemitente.entidadFederativa,
                postData.domicilioRemitente.pais,
                /*identificacion*/
                postData.identificacion.idTipoIdentificacion,
                postData.identificacion.fechaExpiracion,
                postData.identificacion.numeroIdentificacion,
                /*destinatario*/
                postData.destinatario.primerNombre,
                postData.destinatario.segundoNombre,
                postData.destinatario.primerApellido,
                postData.destinatario.segundoApellido,
                postData.destinatario.telefono,
                postData.destinatario.entidadFederativa,
                postData.destinatario.ciudad,
                /*transaccion*/
                postData.transaccion.idCadenaComercial,
                postData.transaccion.idSucursal,
                postData.transaccion.idCadenaComercialDestinatario,
                postData.transaccion.idSucursalDestinatario,
                postData.transaccion.monto,
                postData.transaccion.comision,
                /*dataAdicional*/
                postData.dataAdicional.data,

                /*Cliente API*/
                postData.usuario.idCliente

            ]);
        response = JSON.parse(JSON.stringify(result[0][0]));
        if (response.estatus == 200) {
            response.modelo = JSON.parse(JSON.stringify(result[1][0]));
        }
        return response;
    } catch (ex) {
        throw ex;
    }
}

async function consultar(postData) {
    let response = {};
    try {
        let sql = `CALL ENVNAC_SP_CONSULTAR_GIRO(?)`;
        let result = await db.query(sql, [postData.folioTransaccion])
        response = JSON.parse(JSON.stringify(result[0][0]));
        if (response.estatus == 200) {
            response.modelo = {
                remitente: JSON.parse(JSON.stringify(result[1][0])),
                destinatario: JSON.parse(JSON.stringify(result[2][0])),
                transaccion: JSON.parse(JSON.stringify(result[3][0]))
            }
        }
        return response;
    } catch (ex) {
        throw ex;
    }
}

async function aprovisionar(postData) {

    let response = {};
    try {
        let sql = 'CALL ENVNAC_SP_GENERAR_APROVISION(?,?,?,?,?,?)';
        let result = await db.query(sql, [
            postData.folioTransaccion,
            postData.idCadenaComercial,
            postData.idSucursal,
            postData.otp,
            postData.idTipoAprovision,
            /*Cliente API*/
            postData.usuario.idCliente
            
        ])
        response = JSON.parse(JSON.stringify(result[0][0]));
        if (response.estatus == 200) {
            response.modelo = JSON.parse(JSON.stringify(result[1][0]));
        }
        return response;
    } catch (ex) {
        throw ex;
    }
}

async function cobrar(postData) {
    let response = {};
    try {
        let sql = `CALL ENVNAC_SP_GENERAR_COBRO(?,?,?,?,?,?,?,?,?,?,?,?,?)`;
        let result = await db.query(sql, [
            postData.transaccion.folioTransaccion,
            postData.transaccion.idCadenaComercial,
            postData.transaccion.idSucursal,
            postData.transaccion.otpTransaccion,
            postData.destinatario.primerNombre,
            postData.destinatario.segundoNombre,
            postData.destinatario.primerApellido,
            postData.destinatario.segundoApellido,
            postData.destinatario.telefono,
            postData.destinatario.ciudad,
            postData.destinatario.entidadFederativa,
            postData.dataAdicional.data,
            /*Cliente API*/
            postData.usuario.idCliente
        ])
        response = JSON.parse(JSON.stringify(result[0][0]));
        if (response.estatus == 200) {
            response.modelo = JSON.parse(JSON.stringify(result[1][0]));
            response.modeloInterno = JSON.parse(JSON.stringify(result[2][0]));
        }
        return response;
    } catch (ex) {
        console.log("+++++++++++++++++Error: ",ex)
        throw ex;
    }
}

async function cancelar(postData) {

    let response = {};
    try {
        let sql = `CALL ENVNAC_SP_CANCELAR_GIRO(?,?,?,?,?,?,?,?,?)`;
        let result = await db.query(sql, [
            postData.transaccion.folioTransaccion,
            postData.transaccion.idCadenaComercial,
            postData.transaccion.idSucursal,
            postData.transaccion.otpTransaccion,
            postData.remitente.primerNombre,
            postData.remitente.segundoNombre,
            postData.remitente.primerApellido,
            postData.remitente.segundoApellido,
            /*Cliente API*/
            postData.usuario.idCliente

        ])
        response = JSON.parse(JSON.stringify(result[0][0]));
        if (response.estatus == 200) {
            response.modelo = JSON.parse(JSON.stringify(result[1][0]));
        }
        return response;
    } catch (ex) {
        throw ex;
    }
}

async function actualizar(postData) {

    let response = {};
    try {
        let sql = `CALL ENVNAC_SP_ACTUALIZAR_GIRO (?,?,?,?,?,?,?,?,?,?,?,?,?)`;
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
            /*Cliente API*/
            postData.usuario.idCliente

        ])
        response = JSON.parse(JSON.stringify(result[0][0]));
        if (response.estatus == 200) {
            response.modelo = JSON.parse(JSON.stringify(result[1]));
        }
        return response;
    } catch (ex) {
        throw ex;
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