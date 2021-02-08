const { response } = require("express");
const db = require("../config/database");

async function generateToken(postData) {
    let response = {};
    try {
        console.log("postDATA :::::", postData.user, "  pass", postData.password)
        let sql = `CALL PP_SP_GENERATE_TOKEN (?,?)`;
        let result = await db.query(sql, [postData.user, postData.password]);
        console.log("response", result);
        response = JSON.parse(JSON.stringify(result[0][0]));
        console.log("response", response);
        if (response.status == 200) {
            response.model = JSON.parse(JSON.stringify(result[1][0]));
        }
        return response;
    } catch (ex) {
        console.log("ex:::::", ex)
        throw ex;
    }
}

async function validateToken(usuario) {
    let response = {};
    try {
        let sql = `CALL PP_SP_VALIDATE_TOKEN (?)`;
        let result = await db.query(sql, [usuario.middlewareApiKey]);
        response = JSON.parse(JSON.stringify(result[0][0]));
        return response;
    } catch (ex) {
        response.status=500
        response.status=ex.message
        return response;
    }
}

async function validateServiceAccess(usuario, idService) {
    let response = {};
    try {
        let sql = `CALL PP_SP_VALIDATE_SERVICE_ACCESS (?,?)`;
        let result = await db.query(sql, [usuario.idCustomer, idService]);
        response = JSON.parse(JSON.stringify(result[0][0]));
        if(response.status == 200){
            response.connection = JSON.parse(JSON.stringify(result[1][0]));
        }
        return response;
    } catch (ex) {
        response.status=500
        response.status=ex.message
        return response;
    }
}

async function getGatewayProvider(idOperator) {
    let response = {};
    try {
        let sql = `CALL PP_SP_GET_GATEWAY_PROVIDER (?)`;
        let result = await db.query(sql, [idOperator]);
        response = JSON.parse(JSON.stringify(result[0][0]));
        if(response.status == 200){
            response.gateway = JSON.parse(JSON.stringify(result[1][0]));
        }
        return response;
    } catch (ex) {
        response.status=500
        response.status=ex.message
        return response;
    }
}

async function getAltanCredentials(idOperator,idOffer) {
    let response = {};
    try {
        let sql = `CALL PP_SP_GET_ALTAN_CREDENTIALS (?,?)`;
        let result = await db.query(sql, [idOperator,idOffer]);
        response = JSON.parse(JSON.stringify(result[0][0]));
        if(response.status == 200){
            response.credentials = JSON.parse(JSON.stringify(result[1][0]));
        }
        return response;
    } catch (ex) {
        response.status=500
        response.status=ex.message
        return response;
    }
}

async function getNetweyCredentials() {
    let response = {};
    try {
        let sql = `CALL PP_SP_GET_NETWEY_CREDENTIALS `;
        let result = await db.query(sql);
        response = JSON.parse(JSON.stringify(result[0][0]));
        if(response.status == 200){
            response.credentials = JSON.parse(JSON.stringify(result[1][0]));
            //user,password,requestToken,  tokenNetwey
        }
        return response;
    } catch (ex) {
        response.status=500
        response.status=ex.message
        return response;
    }
}


async function updateTokenAltan(postData) {
    let response = {};
    try {
        let sql = `CALL PP_SP_UPDATE_TOKEN_ALTAN (?,?)`;
        let result = await db.query(sql, [postData.keysAltan.tokenAltan,postData.keysAltan.idOperatorCredentialToken]);
        //console.log("result updateTokenAltan ::::::::::", result[0][0])
        response = JSON.parse(JSON.stringify(result[0][0]));
        return response;
    } catch (ex) {
        throw ex;
    }

}


async function updateTokenNetwey(postData) {
    let response = {};
    try {
        let sql = `CALL PP_SP_UPDATE_TOKEN_NETWEY (?)`;
        let result = await db.query(sql, [postData.keysProvider.tokenNetwey]);
        console.log("result updateTokenNetwey ::::::::::", result[0][0])
        response = JSON.parse(JSON.stringify(result[0][0]));
        return response;
    } catch (ex) {
        throw ex;
    }

}


module.exports = {
    generateToken,
    validateToken,
    validateServiceAccess,
    updateTokenAltan,
    getAltanCredentials,
    getGatewayProvider,
    getNetweyCredentials,
    updateTokenNetwey
}