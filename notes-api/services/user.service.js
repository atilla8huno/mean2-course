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
    getAll: getAllUsers
};

function createUser(user) {
    return new Promise(function (resolve, reject) {

    });
}

function updateUser(user) {
    return new Promise(function (resolve, reject) {

    });
}

function deleteUser(id) {
    return new Promise(function (resolve, reject) {

    });
}

function getAllUsers() {
    return new Promise(function (resolve, reject) {

    });
}

module.exports = Service;