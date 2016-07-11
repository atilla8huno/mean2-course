/**
 * Created by atilla8huno on 07/07/16.
 */
var User = require('../model/user');
var Promise = require('promise');

var Service = {
    create: createUser,
    update: updateUser,
    delete: deleteUser,
    findById: findById,
    findAll: findAll
};

function createUser(user) {
    return new Promise(function (resolve, reject) {
        user.save(function (err, doc) {
            if (err) return reject(err);

            resolve(doc);
        });
    });
}

function updateUser(user) {
    return new Promise(function (resolve, reject) {
        User.findByIdAndUpdate(user._id, user, function (err, doc) {
            if (err) return reject(err);
            if (!doc) return reject('Usuário não encontrado.');
            
            resolve(doc);
        });
    });
}

function deleteUser(id) {
    return new Promise(function (resolve, reject) {
        User.findByIdAndRemove(id, function (err, doc) {
            if (err) return reject(err);
            if (!doc) return reject('Usuário não encontrado.');
            
            resolve(doc);
        });
    });
}

function findById(id) {
    return new Promise(function (resolve, reject) {
        var criteria = {
            _id: id
        };
        
        User.find(criteria, function (err, doc) {
            if (err) return reject(err);
            if (!doc) return reject('Usuário não encontrado.');

            resolve(doc);
        });
    });
}

function findAll() {
    return new Promise(function (resolve, reject) {
        var criteria = {};

        User.find(criteria, function (err, docs) {
            if (err) return reject(err);

            resolve(docs);
        });
    });
}

module.exports = Service;