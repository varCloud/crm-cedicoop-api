const axios = require("axios");
const tokenDAO = require("./../DAO/tokenDAO")
const configGlobal = require('./../config/config');
let token;
let dateToken;



async function refreshToken(postData) {
    let messageClient = "High level error in integration, please report to PagaPhone."
    var header = { headers: { Authorization: "Basic " + postData.keysProvider.user64 } }
    return new Promise((resolve, reject) => {
        axios.post(`${configGlobal.API_NETWEY}auth`, null, header)
            .then(function (response) {
                let res_ = response.data;
                if (res_.status == "OK") {
                    token = res_.response.token
                    data = { "token": res_.response.token, "status": 200, "message": "token success" }
                    dateToken = new Date();
                    postData.keysProvider.tokenNetwey = data.token
                    tokenDAO.updateTokenNetwey(postData)
                    return resolve(data);
                } else {
                    data = { "status": res_.status, "message": res_.cod, "messageClient": messageClient }
                    return resolve(data);
                }
            })
            .catch(function (error) {
                data = { "status": error, "message": error, "messageClient": messageClient }
                return resolve(data);
            });
    });
}


async function getOffers(postData) {
    let messageClient = "High level error in integration, please report to PagaPhone."
    var header = { headers: { Authorization: "Bearer " + postData.keysProvider.tokenNetwey} }
    var pos = {"msisdn": postData.msisdn ,"service":"","seller":"1","lat":"", "lng":"" }
    return new Promise((resolve, reject) => {
        axios.post(`${configGlobal.API_NETWEY}step1`, pos, header)
            .then(function (response) {
                return resolve(response.data);
            })
            .catch(function (error) {
                data = { "status": error, "message": error, "messageClient": messageClient }
                return resolve(data);
            });
    });
}


async function purchase(postData) {
    let messageClient = "High level error in integration, please report to PagaPhone."
    var header = { headers: { Authorization: "Bearer " + postData.keysProvider.tokenNetwey} }
    var pos = {"msisdn": postData.msisdn ,"service":postData.idOffer,"transaction":postData.transaction,"seller": '1' ,"lat":postData.latitud || '', "lng": postData.longitud || '' }
    return new Promise((resolve, reject) => {
        axios.post(`${configGlobal.API_NETWEY}step2-seller`, pos, header)
            .then(function (response) {
                return resolve(response.data);
            })
            .catch(function (error) {
                data = { "status": error, "message": error, "messageClient": messageClient }
                return resolve(data);
            });
    });
}

module.exports={
    refreshToken,
    getOffers,
    purchase
}