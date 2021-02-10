const db = require("../config/database");

async function generar(postData) {
    let response = {};
    try {

        let sql = `CALL ENVNAC_SP_OBTENER_NACIONALIDADES ()`;
        let result = await db.query(sql,
            [
                /*remitente*/
                postData.remitente.nombres ,
                postData.remitente.primerApellido ,
                postData.remitente.segundoApellido ,
                postData.remitente.idGenero ,
                postData.remitente.fechaNacimiento ,
                postData.remitente.idNacionalidad ,
                postData.remitente.idOcupacion ,
                postData.remitente.telefono ,
                postData.remitente.email,
                /*domicilioRemitente*/
                postData.domicilioRemitente.calle ,
                postData.domicilioRemitente.numeroExt ,
                postData.domicilioRemitente.numeroInt ,
                postData.domicilioRemitente.colonia ,
                postData.domicilioRemitente.codigoPostal ,
                postData.domicilioRemitente.municipio ,
                postData.domicilioRemitente.entidadFederativa ,
                postData.domicilioRemitente.pais,
                /*identificacion*/
                postData.identificacion.idTipoIdentificacion ,
                postData.identificacion.fechaExpiracion ,
                postData.identificacion.numeroIdentificacion,
                /*destinatario*/
                postData.destinatario.nombres ,
                postData.destinatario.primerApellido ,
                postData.destinatario.segundoApellido ,
                postData.destinatario.telefono ,
                postData.destinatario.estado ,
                postData.destinatario.ciudad,
                /*transaccion*/
                postData.transaccion.idCadenaComercial,
                postData.transaccion.numeroSucursal ,
                postData.transaccion.monto,
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

module.exports={

    generar 
}