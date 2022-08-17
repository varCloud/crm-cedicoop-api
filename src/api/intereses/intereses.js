const { Router } = require("express");
const router = Router();
const controller = require("./intereses.controller");


router.post('/', controller.crearInteres);

module.exports = router;