"use strict";

module.exports = function(sequelize, DataTypes) {
    var Equipo = sequelize.define("Equipo", {
        /*
        id: {
            type: DataTypes.UUIDV4,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        */
        nombre: {
            type: DataTypes.STRING
        },
        puntaje: {
            type: DataTypes.BIGINT,
            defaultValue: 0,
        },
        fecha_creacion: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
    }, {
        classMethods: {
            associate: function(models) {
                Equipo.hasMany(models.Usuario);
            }
        }
    });
    return Equipo;
};