"use strict";

module.exports = function(sequelize, DataTypes) {
    var Usuario = sequelize.define("Usuario", {
        /*
        id: {
            type: DataTypes.UUIDV4,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        */
        usuario: {
            type: DataTypes.STRING,
            unique: true
        },
        clave: {
            type: DataTypes.STRING
        },
        nombre: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        perfil: {
            type: DataTypes.ENUM,
            values: ['padre', 'hijo']
        }
    }, {
        classMethods: {
            associate: function(models) {
                Usuario.belongsTo(models.Equipo, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });
    return Usuario;
};