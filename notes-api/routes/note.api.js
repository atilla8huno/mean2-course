/**
 * Created by atilla8huno on 07/07/16.
 */
var express = require('express');
var router = express.Router();
var NoteService = require('../services/note.service');
var Note = require('../model/note');
var firebase = require('firebase');

// Firebase setup
firebase.initializeApp({
    serviceAccount: "./connection/firebase.json",
    authDomain: "mean-course-2.firebaseapp.com",
    databaseURL: "https://mean-course-2.firebaseio.com"
});

var auth = firebase.auth();

router.get('/by-id/:id', function (req, res, next) {
    var id = req.params.id;

    NoteService.findById(id)
        .then(function (doc) {
            console.log(doc);

            res.status(200).json(doc);
        }, function (error) {
            res.status(404).send(error);
        });
});

router.get('/by-user/:user', function (req, res, next) {
    var user = req.params.user;

    NoteService.findByUser(user)
        .then(function (doc) {
            console.log(doc);

            res.status(200).json(doc);
        }, function (error) {
            res.status(404).send(error);
        });
});


router.get('/all', function (req, res, next) {

    var token = req.get('X-Auth-Token');

    auth.verifyIdToken(token).then(function(user) {
        NoteService.findAll()
            .then(function (docs) {
                console.log(docs);

                res.status(200).json(docs);
            }, function (error) {
                res.status(404).send(error);
            });
    });
});

router.post('/create', function (req, res, next) {
    var note = new Note({
        title: req.body.title,
        description: req.body.description,
        user: req.body.user
    });

    NoteService.create(note)
        .then(function (doc) {
            console.log(doc);

            res.header('Location', '/note/id/' + doc._id);
            res.status(201).json(doc);
        }, function (error) {
            res.status(404).send(error);
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
            // the OLD doc
            console.log(doc);

            res.status(200).json(doc);
        }, function (error) {
            res.status(404).send(error);
        });
});

router.delete('/delete/:id', function (req, res, next) {
    var id = req.params.id;

    NoteService.delete(id)
        .then(function (doc) {
            // the OLD doc
            console.log(doc);

            res.status(200).json(doc);
        }, function (error) {
            res.status(404).send(error);
        });
});

module.exports = router;