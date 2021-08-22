const e = require('express');
const fs = require('fs');
const path = require('path');


// creo dos constantes, productsFilePath crea el camino hacia la carpeta data el archivo de products.json
// la segunda constante products utiliza el Json.parse para parsiarlo y poder procesarlo con js
//analizar el archivo plao de json y construir un valor js que podamos renderizar y utilizar
// readFileSync va a leer el contenido del path anterior y va a parar las otras actividades de node hasta que se devuelva lo que leyo del json
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


let productsController = {

    //funciona
    index: function(req, res) {
        return res.render('../views/productIndex', { products })

    },

    //funciona
    detail: function(req, res) {

        const product = products.find(elem => elem.id == req.params.id);

        return res.render('../views/productDetail', { product })
    },


    // creo dos constantes, la primera create, va a responder al GET
    // y la segunda store va a ser a STORE, que va a guardar la informacion enviada a traves del formulario
    create: function(req, res) {
        return res.render(path.resolve('./views/productCreate'))
    },

    store: function(req, res) {
        return res.send(req.file)

    },


    // creo una constante que usa en la variable products (mi BD) el metodo find, para encontrar una elemento de la array segundo la condicion que le doy en base al id
    // el metodo find recibe un callback que va a funcionar sobre cada elemento de la array
    // la condicion que le doy al callback es que el element (es el nombre que le asigno a la interacion o repeticion de la array), primero va con el elemento con id 1 dps 2 etc


    edit: function(req, res) {
        let productEditar = products.find(element => element.id == req.params.id)
        return res.render('../views/productEdit', { productEditar })
    },


    update: function(req, res) {

    },


    delete: function(req, res) {


    },




};


module.exports = productsController;