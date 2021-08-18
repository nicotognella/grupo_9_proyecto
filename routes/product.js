var express = require('express');
var router = express.Router();

/* GET home page. */

// importo el controlador y lo vinculo a una ruta
const productsController = require ('../controllers/productsController')

//a la ruta base '/' la vinculo con el indexController y dentro de este el metodo index

//Index

router.get ('/',productsController.index)

//Detalle producto

router.get ('/detail/:id',productsController.detail)

//Editar

router.get ('/edit/:id',productsController.edit)
//router.put ('/edit/:id',productsController.editar)

//Carrito de compras

router.get ('/cart',productsController.cart)

//Crear producto

router.get ('/create',productsController.create)





//Export
module.exports = router;