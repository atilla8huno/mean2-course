/**
 * Created by atilla8huno on 07/07/16.
 */
var mongoose = require('mongoose');
var Note = require('../model/note');
var Promise = require('promise');

var Service = {
    create: createNote,
    update: updateNote,
    delete: deleteNote,
    findById: findById,
    getAll: getAllNotes
};

function createNote(note) {
    return new Promise(function (resolve, reject) {
        resolve({ temp: 'Ok' });
    });
}

function updateNote(note) {
    return new Promise(function (resolve, reject) {
        resolve({ temp: 'Ok' });
    });
}

function deleteNote(id) {
    return new Promise(function (resolve, reject) {
        resolve({ temp: 'Ok' });
    });
}

function findById(id) {
    return new Promise(function (resolve, reject) {
        resolve({ temp: 'Ok' });
    });
}

function getAllNotes() {
    return new Promise(function (resolve, reject) {
        resolve({ temp: 'Ok' });
    });
}

module.exports = Service;