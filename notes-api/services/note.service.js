/**
 * Created by atilla8huno on 07/07/16.
 */
var Note = require('../model/note');
var Promise = require('promise');

var Service = {
    create: createNote,
    update: updateNote,
    delete: deleteNote,
    findById: findById,
    findByUser: findByUser,
    findAll: findAll
};

function createNote(note) {
    return new Promise(function (resolve, reject) {
        UserService.findById(note.user)
            .then(function () {
                note.save(function (err, doc) {
                    if (err) return reject(err);
                    
                    resolve(doc);
                });
            }, function (error) {
                return reject(error);
            });
    });
}

function updateNote(note) {
    return new Promise(function (resolve, reject) {
        Note.findByIdAndUpdate(note._id, note, function (err, doc) {
            if (err) return reject(err);
            if (!doc) return reject('Nota não encontrada.');
            
            resolve(doc);
        });
    });
}

function deleteNote(id) {
    return new Promise(function (resolve, reject) {
        Note.findByIdAndRemove(id, function (err, doc) {
            if (err) return reject(err);
            if (!doc) return reject('Nota não encontrada.');
            
            resolve(doc);
        });
    });
}

function findById(id) {
    return new Promise(function (resolve, reject) {
        Note.findById(id, function (err, doc) {
            if (err) return reject(err);
            if (!doc) return reject('Nota não encontrada.');
            
            resolve(doc);
        });
    });
}

function findAll() {
    return new Promise(function (resolve, reject) {
        var criteria = {};
        
        Note.find(criteria, function (err, docs) {
            if (err) return reject(err);

            resolve(docs);
        });
    });
}

function findByUser(user) {
    return new Promise(function (resolve, reject) {
        var criteria = {
            user: user
        };

        Note.find(criteria, function (err, docs) {
            if (err) return reject(err);

            resolve(docs);
        });
    });
}

module.exports = Service;