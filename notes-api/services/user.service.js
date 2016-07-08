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
    getAll: getAllUsers
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
        User.findById(user._id, function (err, doc) {
            if (err) return reject(err);
            if (!doc) return reject('Usuário não encontrado.');

            doc.save(function (error, result) {
                if (error) return reject(error);

                resolve(result);
            });
        });
    });
}

function deleteUser(id) {
    return new Promise(function (resolve, reject) {
        User.findById(id, function (err, doc) {
            if (err) return reject(err);
            if (!doc) return reject('Usuário não encontrado.');

            doc.remove(function (error, result) {
                if (error) return reject(error);

                resolve(result);
            });
        });
    });
}

function findById(id) {
    return new Promise(function (resolve, reject) {
        User.findById(id, function (err, doc) {
            if (err) return reject(err);
            if (!doc) return reject('Usuário não encontrado.');

            resolve(result);
        });
    });
}

function getAllUsers() {
    return new Promise(function (resolve, reject) {
        User.find()
            .populate('fullName', 'email')
            .exec(function (err, docs) {
                if (err) return reject(err);
                if (!docs) return reject('Nenhum usuário encontrado.');

                resolve(docs);
            });
    });
}

module.exports = Service;