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
    getAll: getAllNotes
};

function createNote(note) {
    return new Promise(function (resolve, reject) {

    });
}

function updateNote(note) {
    return new Promise(function (resolve, reject) {

    });
}

function deleteNote(id) {
    return new Promise(function (resolve, reject) {

    });
}

function getAllNotes() {
    return new Promise(function (resolve, reject) {

    });
}

module.exports = Service;