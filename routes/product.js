var express = require('express');
var router = express.Router();


// importo el controlador y lo vinculo a una ruta
const productsController = require ('../controllers/productsController')


//configuracion almacenamiento multer
// defino multer para subir imagenes y archivos
// primero lo almaceno en una constantes y despues creo una segunda constante donde va a estar el destino 
//al que va a enviar multer los archivos
//en la constante storage, uso diskStorage para definir el destino y el nombre que se le va a dar al archivo
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname + "-" + Date.now() + '.jpg')    
        /*otra forma de escribirlo
        cb(null, `${file.originalname}-${Date.now ()}.jpg`)*/

    }
})
const upload = multer({storage})

//Index

router.get ('/',productsController.index)


//Crear producto
// primero tengo una peticion GET para mostrar el formulario
// y despues una peticion POST para enviar los datos nuevos
router.get ('/create',productsController.create)
router.post ('/',upload.single ('image'), productsController.store)

//Editar

router.get ('/:id/edit',productsController.edit)
router.put ('/:id', upload.single ('image'),productsController.update)

//Detalle producto

router.get ('/:id',productsController.detail)

//Eliminar

router.delete ('/:id', productsController.delete)



//Export
module.exports = router;