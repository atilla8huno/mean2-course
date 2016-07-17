/**
 * Created by atilla8huno on 07/07/16.
 */
var Note = require('../model/note');

var Service = {
    create: createNote,
    update: updateNote,
    delete: deleteNote,
    findById: findById,
    findByUserEmail: findByUserEmail
};

function createNote(note) {
    return new Promise(function (resolve, reject) {
        note.save(function (err, doc) {
            if (err) return reject(err);

            resolve(doc);
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

function findByUserEmail(userEmail) {
    return new Promise(function (resolve, reject) {
        var criteria = {
            userEmail: userEmail
        };

        Note.find(criteria, function (err, docs) {
            if (err) return reject(err);
            if (!docs || !docs.length > 0) return reject('Nenhuma nota encontrada.');

            resolve(docs);
        });
    });
}

module.exports = Service;