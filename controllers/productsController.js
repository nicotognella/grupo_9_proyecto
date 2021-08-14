const e = require('express');
const fs = require('fs');
const path = require('path');

let productsController = {
    detalle: function (req, res) {
        const rutaVistaDetail = path.resolve ('./views/productDetail')
       return res.render (rutaVistaDetail)
    },
    carrito: function (req, res) {
        const rutaVistaCart = path.resolve ('./views/productCart')
        res.render (rutaVistaCart)
    },
    crear: function (req, res) {
        const rutaVistaCreate = path.resolve ('./views/productCreate')
        res.render (rutaVistaCreate)
    },
    editar: function (req, res) {
        const rutaVistaEdit = path.resolve ('./views/productEdit')
        res.render (rutaVistaEdit)
    },
    index: function (req, res) {
        const rutaVistaIndex = path.resolve ('./views/productIndex')
        res.render (rutaVistaIndex)
    }
    
};


module.exports = productsController;