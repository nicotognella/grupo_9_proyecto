const e = require('express');
const fs = require('fs');
const path = require('path');

// creo dos constantes, productsFilePath crea el camino hacia la carpeta data el archivo de products.json
// la segunda constante products utiliza el Json.parse para analizar el archivo json y construir un valor js que podamos renderizar
// readFileSync va a leer el contenido del path anterior y va a parar las otras actividades de node hasta que se devuelva lo que leyo del json
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


let productsController = {
    detalle: function (req, res) {
        return res.render (path.resolve ('./views/productDetail'))
    },
    carrito: function (req, res) {
        return res.render (path.resolve ('./views/productCart')
)
    },
    crear: function (req, res) {
        return res.render (path.resolve('./views/productCreate'))
    },
    editar: function (req, res) {
        return res.render (path.resolve ('./views/productEdit'))
    },
    index: function (req, res) {
        return res.render  ('../views/productIndex', {products})
        
    }
    
};


module.exports = productsController;