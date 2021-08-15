var express = require('express');
var router = express.Router();

/* GET home page. */

// importo el controlador y lo vinculo a una ruta
const productsController = require ('../controllers/productsController')

//a la ruta base '/' la vinculo con el indexController y dentro de este el metodo index

//Index

router.get ('/',productsController.index)

//Editar

router.get ('/edit',productsController.editar)
router.get ('/edit/:id',productsController.editar)

//Carrito de compras

router.get ('/cart',productsController.carrito)

//Crear producto

router.get ('/create',productsController.crear)

//Detalle producto

router.get ('/detail',productsController.detalle)
router.get ('/detail/:id',productsController.detalle)



//Export
module.exports = router;