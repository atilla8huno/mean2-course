/**
 * Created by atilla8huno on 08/07/16.
 */
var mongoose = require('mongoose');
var mongodb = require('./mongodb');

const URI = '' +
    mongodb.serverName + '://' +
    mongodb.username + ':' +
    mongodb.password + '@' +
    mongodb.dns + ':' +
    mongodb.port + '/' +
    mongodb.database;

var connection = {
    connect: function () {
        mongoose.connect(URI, function (err) {
            if (err) throw err;

            console.log('MongoDB connected at ' + URI);
        });
    }
};

module.exports = connection;