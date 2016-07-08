/**
 * Created by atilla8huno on 07/07/16.
 */
var mongoose = require('mongoose');
var Note = require('../model/note');

var Service = {
    create: createNote,
    update: updateNote,
    delete: deleteNote,
    getAll: getAllNotes
};

function createNote(note) {

}

function updateNote(note) {

}

function deleteNote(id) {

}

function getAllNotes() {

}

module.exports = Service;