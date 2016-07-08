/**
 * Created by atilla8huno on 07/07/16.
 */
var express = require('express');
var router = express.Router();
var NoteService = require('../services/note.service');
var Note = require('../model/note');

router.get('/:id', function (req, res, next) {
    var id = req.params.id;

    NoteService.findById(id)
        .then(function (doc) {
            console.log(doc);

            res.status(200).json(doc);
        }, function (error) {

        });
});

router.get('/all', function (req, res, next) {
    NoteService.getAll(id)
        .then(function (docs) {
            console.log(docs);

            res.status(200).json(doc);
        }, function (error) {

        });
});

router.post('/create', function (req, res, next) {
    var note = new Note({
        title: req.body.title,
        description: req.body.description
    });

    NoteService.create(note)
        .then(function (doc) {
            console.log(doc);

            res.status(200).json(doc);
        }, function (error) {

        });
});

router.put('/update', function (req, res, next) {
    var note = new Note({
        _id: req.body._id,
        title: req.body.title,
        description: req.body.description
    });

    NoteService.update(note)
        .then(function (doc) {
            console.log(doc);

            res.status(200).json(doc);
        }, function (error) {

        });
});

router.delete('/delete/:id', function (req, res, next) {
    var id = req.params.id;

    NoteService.delete(id)
        .then(function (doc) {
            console.log(doc);

            res.status(200).json(doc);
        }, function (error) {

        });
});

module.exports = router;