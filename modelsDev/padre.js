"use strict";

module.exports = function(sequelize, DataTypes) {
    var padre = sequelize.define("Padre", {
        id: {
            type: DataTypes.UUIDV4,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true},

    }, {
        classMethods: {
            associate: function(models) {
                Juego.belongsTo(models.Imagen, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });
                Juego.belongsTo(models.Palabra, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });

    return Juego;
};