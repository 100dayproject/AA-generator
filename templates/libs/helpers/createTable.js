"use strict";

let Promise = require('bluebird');

class createTable {
    constructor(modelData, tableStructure, condition, pagination) {
        this.model = modelData;
        this.table = tableStructure;
        this.condition = condition || {};
        this.pagination = pagination || {};
    }

    render(done) {
        let columnSelect = '';
        let populate = {};
        let populateKey = [];
        this.table.forEach(function (item) {
            columnSelect += `${item.column.trim()} `;
            if (item.populate) {
                populate[item.column] = item.populate.select.trim();
                populateKey.push(item.column.trim());
            }
        });

        Promise.all([
            this.model.find(this.condition).count(function (err, total) {
                if (err) {
                    __.logger.error(err, 'backend');
                    return done(err);
                }
                return total;
            }),
            this.model.find(this.condition).skip(this.pagination.offset).limit(this.pagination.pageSize)
                .select(columnSelect.trimRight())
                .populate(populateKey[0] || '', populate[populateKey[0]] || '')
                .populate(populateKey[1] || '', populate[populateKey[1]] || '')
                .populate(populateKey[2] || '', populate[populateKey[2]] || '')
                .populate(populateKey[3] || '', populate[populateKey[3]] || '')
                .exec(function (err, foundTable) {
                    if (err) {
                        __.logger.error(err, 'backend');
                        return done(err);
                    }
                    return foundTable;
                })
        ]).then(function (data) {
            done(null, data);
        }).catch(function (e) {
            done(e);
        })
    }
}

module.exports = createTable;