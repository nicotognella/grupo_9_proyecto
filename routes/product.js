var express = require('express');
var router = express.Router();

/* GET home page. */

// importo el controlador y lo vinculo a una ruta
const productsController = require ('../controllers/productsController')

//a la ruta base '/' la vinculo con el indexController y dentro de este el metodo index

//configuracion almacenamiento multer
// defino multer para subir imagenes y archivos
// primero lo almaceno en una constantes y despues creo una segunda constante donde va a estar el destino 
//al que va a enviar multer los archivos
//en la constante storage, defino el destino y el nombre que se le va a dar al archivo
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname + "-" + Date.now() + '.jpg')      
    }
})
const upload = multer({storage})

//Index

router.get ('/',productsController.index)


//Crear producto
// primero tengo una peticion GET para mostrar el formulario
// y despues una peticion POST para enviar los datos nuevos
router.get ('/create',productsController.create)
router.post ('/create',upload.single ('image'), productsController.store)

//Editar

router.get ('/:id/edit',productsController.edit)
router.put ('/:id',productsController.update)

//Detalle producto

router.get ('/:id',productsController.detail)

router.delete ('/:id', productsController.delete)









//Export
module.exports = router;