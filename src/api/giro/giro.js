const { Router } = require("express");
const router = Router();
const controller = require("./giroController");
const token = require("../token/tokenController");

//generar -- genera un giro
//consultar --- consulta un folio de un giro
//aprovisionar --- marcar en proceso para cobrarla
//cobrar  -- cobra un giro


/**
 * @swagger
 *  /giro/generar:
 *  post:
 *     tags:
 *       - Giro
 *     description: Servicio para generar un giro de envío de dinero.
 *     produces:
 *       - application/json
 *     parameters:
 *     - in: "header"
 *       name: "authorization-pp"
 *       example: "Bearer-PP TOKEN"
 *     - in: "body"
 *       name: "body"
 *       description: "Estructura del request para la peticion del servicio"
 *       required: true
 *       schema:
 *         $ref: "#/definitions/RequestGenerar"
 *     responses:
 *       200:
 *         description: Regresa un estatus,mensaje y folio de transacción en caso de ser exitoso
 *         schema:
 *           $ref: '#/definitions/ResponseGenerar'
 *
 * definitions:
 *  RequestGenerar:
 *   type: object
 *   properties:
 *     remitente:
 *       type: object
 *       properties: 
 *          nombres:
 *            type: string
 *          primerApellido:
 *            type: string
 *          segundoApellido:
 *            type: string
 *          idGenero:
 *            type: integer
 *            format: int64
 *            description: 1- Masculino, 2- Femenino 3- Otro, 4-Prefiero no decirlo
 *          fechaNacimiento:
 *            type: string
 *            description: Enviar en formato yyyy-mm-dd
 *          idNacionalidad:
 *            type: integer
 *            format: int64
 *            description: Identificador de acuerdo al catalogo de nacionalidades proporcionado por la api
 *          idOcupacion:
 *            type: integer
 *            format: int64
 *            description: Identificador de acuerdo al catalogo de ocupaciones proporcionado por la api
 *          telefono:
 *            type: string
 *          email:
 *            type: string
 *     domicilioRemitente:
 *       type: object
 *       properties: 
 *          calle:
 *            type: string
 *          numeroExt:
 *            type: string
 *          numeroInt:
 *            type: string
 *          colonia:
 *            type: string
 *          codigoPostal:
 *            type: string
 *          municipio:
 *            type: string
 *          entidadFederativa:
 *            type: string
 *          pais:
 *            type: string
 *     identificacion:
 *       type: object
 *       properties: 
 *          idTipoIdentificacion:
 *            type: integer
 *            format: int64
 *            description: Identificador de acuerdo al catalogo de tipos de identificación proporcionado por la api
 *          fechaExpiracion:
 *            type: string
 *            description: Enviar en formato yyyy-mm-dd
 *          numeroIdentificacion:
 *            type: string
 *     destinatario:
 *       type: object
 *       properties: 
 *          nombres:
 *            type: string
 *          primerApellido:
 *            type: string
 *          segundoApellido:
 *            type: string
 *          telefono:
 *            type: string
 *          estado:
 *            type: string
 *          ciudad:
 *            type: string
 *     transaccion:
 *       type: object
 *       properties: 
 *          idCadenaComercial:
 *            type: integer
 *            format: int64
 *            description: Identificador de acuerdo al catalogo de cadenas comerciales proporcionado por la api
 *          numeroSucursal:
 *            type: string
 *            description: Identificador de sucursal de parte del integrador
 *          monto:
 *            type: string
 *     dataAdicional:
 *       type: object
 *       properties: 
 *          data:
 *            type: string
 *            description: Información adicional de parte del integrador
 * 
 *  ResponseGenerar:
 *   type: object
 *   properties:
 *     status:
 *       type: integer
 *       format: int64
 *     message:
 *       type: string
 *     model:
 *        type: object
 *        properties:
 *          folioTransaccion:
 *             type: string
 *          estatusTransaccion:
 *             type: integer
 *             format: int64
 *          fechaTransaccion:
 *             type: string
 *          
 */
router.post("/generar", controller.generar);


/**
 * @swagger
 *  /giro/consultar:
 *  post:
 *     tags:
 *       - Giro
 *     description: Servicio para consultar un giro de envío de dinero.
 *     produces:
 *       - application/json
 *     parameters:
 *     - in: "header"
 *       name: "authorization-pp"
 *       example: "Bearer-PP TOKEN"
 *     - in: "body"
 *       name: "body"
 *       description: "Estructura del request para la peticion del servicio"
 *       required: true
 *       schema:
 *         $ref: "#/definitions/RequestConsultar"
 *     responses:
 *       200:
 *         description: Regresa un estatus,mensaje y datos de una transacción en caso de estar disponible.
 *         schema:
 *           $ref: '#/definitions/ResponseConsultar'
 *
 * definitions:
 *  RequestConsultar:
 *   type: object
 *   properties:
 *     folioTransaccion:
 *       type: string
 * 
 *  ResponseConsultar:
 *   type: object
 *   properties:
 *     status: 
 *       type: integer
 *       format: int64
 *     message:
 *       type: string
 *     model:
 *      type: object
 *      properties: 
 *        destinatario:
 *          type: object
 *          properties: 
 *            nombres:
 *             type: string
 *            primerApellido:
 *             type: string
 *            segundoApellido:
 *             type: string
 *            telefono:
 *             type: string
 *            estado:
 *             type: string
 *            ciudad:
 *             type: string
 *        transaccion:
 *           type: object
 *           properties: 
 *            cadenaComercial:
 *              type: integer
 *              format: int64
 *              description: Identificador de acuerdo al catalogo de cadenas comerciales proporcionado por la api
 *            sucursal:
 *              type: integer
 *              format: int64
 *              description: Identificador de acuerdo al catalogo de sucursales proporcionado por la api
 *            monto:
 *              type: string
 *            folioTransaccion:
 *              type: string
 *            estatusTransaccion:
 *              type: integer
 *              format: int64
 *            fechaTransaccion:
 *              type: string
 *         
 *          
 */
router.post("/consultar", controller.consultar);

/**
 * @swagger
 *  /giro/aprovisionar:
 *  post:
 *     tags:
 *       - Giro
 *     description: Servicio para aprovisionar un giro de envío de dinero.
 *     produces:
 *       - application/json
 *     parameters:
 *     - in: "header"
 *       name: "authorization-pp"
 *       example: "Bearer-PP TOKEN"
 *     - in: "body"
 *       name: "body"
 *       description: "Estructura del request para la peticion del servicio"
 *       required: true
 *       schema:
 *         $ref: "#/definitions/RequestAprovicionar"
 *     responses:
 *       200:
 *         description: Regresa un estatus,mensaje y datos de aprovisionamiento de un giro.
 *         schema:
 *           $ref: '#/definitions/ResponseAprovisionar'
 *
 * definitions:
 *  RequestAprovicionar:
 *   type: object
 *   properties:
 *     folioTransaccion:
 *       type: string
 *     numeroSucursal:
 *       type: string
 *       description: Identificador de sucursal de parte del integrador
 * 
 *  ResponseAprovisionar:
 *   type: object
 *   properties:
 *     status: 
 *       type: integer
 *       format: int64
 *     message:
 *       type: string
 *     model:
 *        type: object
 *        properties:
 *          folioTransaccion:
 *             type: string
 *          estatusTransaccion:
 *             type: integer
 *             format: int64
 *          otpTransaccion:
 *             type: string
 *             description: Otp necesario para realizar el cobro de un giro de envío de dinero.
 *          
 */
router.post("/aprovisionar", controller.aprovisionar);

/**
 * @swagger
 *  /giro/cobrar:
 *  post:
 *     tags:
 *       - Giro
 *     description: Servicio para cobrar un giro de envío de dinero.
 *     produces:
 *       - application/json
 *     parameters:
 *     - in: "header"
 *       name: "authorization-pp"
 *       example: "Bearer-PP TOKEN"
 *     - in: "body"
 *       name: "body"
 *       description: "Estructura del request para la peticion del servicio"
 *       required: true
 *       schema:
 *         $ref: "#/definitions/RequestCobrar"
 *     responses:
 *       200:
 *         description: Regresa un estatus,mensaje y datos de una transacción en caso de realizar el cobro exitoso.
 *         schema:
 *           $ref: '#/definitions/ResponseCobrar'
 *
 * definitions:
 *  RequestCobrar:
 *   type: object
 *   properties:
 *     folioTransaccion:
 *       type: string
 *     numeroSucursal:
 *       type: string
 *       description: Identificador de sucursal de parte del integrador
 *     otpTransaccion:
 *       type: string
 *       description: Otp que se obtiene en el ws de aprovisionar.
 *     dataAdicional:
 *       type: object
 *       properties: 
 *          data:
 *            type: string
 *            description: Información adicional de parte del integrador
 * 
 *  ResponseCobrar:
 *   type: object
 *   properties:
 *     status: 
 *       type: integer
 *       format: int64
 *     message:
 *       type: string
 *     model:
 *        type: object
 *        properties:
 *          folioTransaccion:
 *             type: string
 *          estatusTransaccion:
 *             type: integer
 *             format: int64
 *          fechaCobro:
 *             type: string
 *             description: Otp necesario para realizar el cobro de un giro de envío de dinero.
 *          
 */
router.post("/cobrar", controller.cobrar);

module.exports = router;