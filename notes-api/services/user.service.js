/**
 * Created by atilla8huno on 07/07/16.
 */
var mongoose = require('mongoose');
var User = require('../model/user');
var Promise = require('promise');

var Service = {
    create: createUser,
    update: updateUser,
    delete: deleteUser,
    findById: findById,
    getAll: getAllUsers
};

function createUser(user) {
    return new Promise(function (resolve, reject) {
        resolve({ temp: 'Ok' });
    });
}

function updateUser(user) {
    return new Promise(function (resolve, reject) {
        resolve({ temp: 'Ok' });
    });
}

function deleteUser(id) {
    return new Promise(function (resolve, reject) {
        resolve({ temp: 'Ok' });
    });
}

function findById(id) {
    return new Promise(function (resolve, reject) {
        resolve({ temp: 'Ok' });
    });
}

function getAllUsers() {
    return new Promise(function (resolve, reject) {
        resolve({ temp: 'Ok' });
    });
}

module.exports = Service;