var express = require('express');
var router = express.Router();

/* GET home page. */

// importo el controlador y lo vinculo a una ruta
const productsController = require ('../controllers/productsController')

//a la ruta base '/' la vinculo con el indexController y dentro de este el metodo index

//Index

router.get ('/',productsController.index)

//Detalle producto

router.get ('/:id',productsController.detail)

//Crear producto
// primero tengo una peticion GET para mostrar el formulario
// y despues una peticion POST para enviar los datos nuevos
router.get ('/create',productsController.create)
router.post ('/',productsController.store)

//Editar

router.get ('/:id/edit',productsController.edit)
router.put ('/:id',productsController.update)


router.delete ('/:id', productsController.delete)









//Export
module.exports = router;