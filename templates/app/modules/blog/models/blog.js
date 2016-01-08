"use strict";

module.exports = function (sequelize, DataTypes) {

    let blog = sequelize.define("blog", {
        about: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, {
        tableName: "blogs",
        timestamps: false
    });
    blog.sync();
    return blog;
};