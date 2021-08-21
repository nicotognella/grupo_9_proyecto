var express = require('express');
var router = express.Router();

/* GET home page. */

// importo el controlador y lo vinculo a una ruta
const indexController = require ('../controllers/indexController')

//a la ruta base '/' la vinculo con el indexController y dentro de este el metodo index

//Home
router.get ('/',indexController.home)

//login
router.get ('/login',indexController.login)

//Registro
router.get ('/registro',indexController.registro)

//Carro de productos

router.get ('/cart',indexController.cart)

module.exports = router;
