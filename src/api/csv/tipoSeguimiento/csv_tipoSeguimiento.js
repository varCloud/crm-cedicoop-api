const { Router } = require("express");
const router = Router();
const csv_cursos = require("./csv_tipoSeguimiento.controller")

router.get('/', csv_cursos.obtenertipoSeguimiento);

module.exports = router;