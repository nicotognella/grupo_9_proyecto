const e = require('express');
const path = require ('path');
const fs = require('fs');

module.exports = indexController = {
   home: function(req, res){
       const rutaVistaHome = path.resolve ('./views/home')
       res.render(rutaVistaHome)
    },
    login: function(req, res) {
        const rutaVistaLogin = path.resolve ('./views/login')
        res.render(rutaVistaLogin)
    },
    registro: function(req, res) {
        const rutaVistaRegistro = path.resolve ('./views/registro')
        res.render(rutaVistaRegistro)
    } 
}

