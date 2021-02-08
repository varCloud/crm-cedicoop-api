const db = require("../config/database");

async function getOperators(postData) {
    let response = {};
    try {

        let sql = `CALL PP_SP_GET_OPERATORS (?)`;
        let result = await db.query(sql, [postData.idCustomer]);
        console.log(result);
        response = JSON.parse(JSON.stringify(result[0][0]));
        if (response.status == 200) {
            response.operators = JSON.parse(JSON.stringify(result[1]));
        }
        console.log(response);
        return response;
    } catch (ex) {
        throw ex;
    }
}

async function getOfferstByOperator(postData) {
    let response = {};
    try {

        let sql = `CALL PP_SP_GET_OFFERS_OPERATOR (?, ?)`;
        let result = await db.query(sql, [postData.idOperator, postData.idCustomer]);
        response = JSON.parse(JSON.stringify(result[0][0]));
        console.log(response);
        if (response.status == 200) {
            response.offers = JSON.parse(JSON.stringify(result[1]));
            socialArray = JSON.parse(JSON.stringify(result[2]));
            response.offers.forEach(element => {
                element.socialNetwork = socialArray.filter(x => x.idOfferDetail == element.idOfferDetail);
            })
        }
        return response;
    } catch (ex) {
        throw ex;
    }
}


async function getIdAltanById(idOffer) {
    let response = {};
    try {

        let sql = `CALL PP_SP_GET_ALTAN_OFFER_DETAIL (?)`;
        let result = await db.query(sql, [idOffer]);
        response = JSON.parse(JSON.stringify(result[0][0]));

        if (response.status == 200) {
            response.offers = JSON.parse(JSON.stringify(result[1][0]));
        }
        return response;
    } catch (ex) {
        throw ex;
    }
}


async function getErrorMessageNetwey(postData) {
    let response = {};
    try {

        let sql = `CALL PP_SP_GET_NETWEY_ERROR_MESSAGE (?)`;
        let result = await db.query(sql, [postData.cod]);
        response = JSON.parse(JSON.stringify(result[0][0]));
        if (response.status == 200) {
            response.model = JSON.parse(JSON.stringify(result[1][0]));
        }
        return response;
    } catch (ex) {
        throw ex;
    }
}

module.exports = {
    getOperators,
    getOfferstByOperator,
    getIdAltanById,
    getErrorMessageNetwey
}