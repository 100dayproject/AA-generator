"use strict";

module.exports = function (sequelize, DataTypes) {

    let home = sequelize.define("home", {
        about: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, {
        tableName: "homes",
        timestamps: false
    });
    home.sync();
    return home;
};