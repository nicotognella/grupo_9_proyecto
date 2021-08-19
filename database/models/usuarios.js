module.exports = function (sequelize, dataTypes) {

    let alias = "Usuarios";
    let cols = {
        id_pk: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING
        },
        apellido: {
            type: dataTypes.STRING
        },
        correo_electronico: {
            type: dataTypes.STRING
        },
        contraseña: {
            type: dataTypes.STRING
        },
        id_permisos: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tableName: "credenciales_usuarios",
        timestamps: false
    }


    let usuarios = sequelize.define(alias, cols, config);

    return usuarios;
}