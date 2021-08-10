const e = require('express');
const fs = require('fs');
const path = require('path');

let productsController = {
    detalle: function (req, res) {
        const rutaVistaDetail = path.resolve ('./views/productDetail')
        res.render (rutaVistaDetail)
    },
    carrito: function (req, res) {
        const rutaVistaCart = path.resolve ('./views/productCart')
        res.render (rutaVistaCart)
    },
    crear: function (req, res) {
        const rutaVistaCreate = path.resolve ('./views/productCreate')
        res.render (rutaVistaCreate)
    }
    
};


module.exports = productsController;