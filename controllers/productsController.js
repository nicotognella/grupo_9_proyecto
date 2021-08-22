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

        //tengo que buscar el ultimo producto del array
        //ver su posicion y restarle 1 para saber el id porque las array empiezan a contar en 0
        //obtengo su id 
        //el id del producto creado va a ser el ultimo producto sumando 1 

        const lastProduct = products[products.length -1]
        const productToCreate = req.body;
        productToCreate.id = lastProduct.id +1;


        //lo agrego a la array de la BD y lo guardo al producto pusheado
        products.push (productToCreate)
        fs.writeFileSync (productsFilePath, JSON.stringify(products,null,2))
        
        return res.render('../views/productIndex', { products })

    },


    // creo una constante que usa en la variable products (mi BD) el metodo find, para encontrar una elemento de la array segundo la condicion que le doy en base al id
    // el metodo find recibe un callback que va a funcionar sobre cada elemento de la array
    // la condicion que le doy al callback es que el element (es el nombre que le asigno a la interacion o repeticion de la array), primero va con el elemento con id 1 dps 2 etc


    edit: function(req, res) {
        let productEditar = products.find(element => element.id == req.params.id);   
        // !productoEditar, seria si no existe un producto con ese id, le pongo un if para que muestre error
        if(!productEditar){
            return res.send("ERROR, no hay producto con el id dado")
          }
          
          return res.render('../views/productEdit', { productEditar });
    },

    update: function (req, res) {
        //Tengo que encontrar el indice del producto en el array en la base de datos en base a su id
        //actualizar ese producto
        //guardar nuevamente ese producto
        
        const indiceDelProducto = products.findIndex (producto => producto.id == req.params.id)

        //products[indiceDelProducto] == producto que quiero en el array
        //la sintaxis ...products[indiceDelProducto], ...req.body hace que me convine (dos objetos) lo nuevo que
        // mando en el formulario con las cosas que ya estaban en el producto que no modifique
        products [indiceDelProducto] = { ...products[indiceDelProducto], ...req.body}
        
        //guardo la nueva info en la base de datos
        //writeFileSync me va a modificar la base de datos, el primer parametro es la ruta a la BD que especifique arriba
        // el segundo convierte la informacion en JSON string (null y 2 es para que lo guarde en el formato que quiero y no un texto plano)
        fs.writeFileSync (productsFilePath, JSON.stringify(products,null,2))
        return res.render('../views/productIndex', { products })
        
    },


    delete: function(req, res) {
        

    },
        
  


  




};


module.exports = productsController;