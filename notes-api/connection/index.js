/**
 * Created by atilla8huno on 08/07/16.
 */
var mongoose = require('mongoose');
var mongodb = require('./mongodb');

const URL = '' +
    mongodb.serverName + '://' +
    mongodb.username + ':' +
    mongodb.password + '@' +
    mongodb.dns + ':' +
    mongodb.port + '/' +
    mongodb.database;

var connection = {
    connect: function () {
        mongoose.connect(URL);
        
        console.log('MongoDB connected at ' + URL);
    }
};

module.exports = connection;