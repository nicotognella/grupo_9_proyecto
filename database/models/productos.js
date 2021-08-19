module.exports = function (sequelize, dataTypes) {

    let alias = "Productos";
    let cols = {
        id_tablaproductos: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_producto: {
            type: dataTypes.STRING
        },
        precio: {
            type: dataTypes.INTEGER
        },
        id_color: {
            type: dataTypes.INTEGER
        },
        descripcion: {
            type: dataTypes.STRING
        },
        id_categoria: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tableName: "tabla_productos",
        timestamps: false
    }


    let usuarios = sequelize.define(alias, cols, config);

    return productos;
}