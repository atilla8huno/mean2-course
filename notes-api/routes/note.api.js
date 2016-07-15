/**
 * Created by atilla8huno on 07/07/16.
 */
var express = require('express');
var router = express.Router();
var NoteService = require('../services/note.service');
var Note = require('../model/note');
var firebaseService = require('../services/firebase.service');

router.use('/', function (req, res, next) {
    if (req.method === 'OPTIONS') {
        next();
    } else {
        firebaseService.validateToken(req.get('X-Auth-Token')).then(function (user) {
            req.userEmail = user.email;
            
            next();
        }, function (error) {
            res.status(401).send(error);
        });
    }
});

router.get('/by-id/:id', function (req, res, next) {
    var id = req.params.id;
    var userEmail = req.userEmail;
    
    NoteService.findById(id)
        .then(function (doc) {
            if (doc.userEmail !== userEmail) {
                res.status(401).send('Você não tem acesso a notas de outro usuário.');
            } else {
                res.status(200).json(doc);    
            }
        }, function (error) {
            res.status(404).send(error);
        });
});

router.get('/all', function (req, res, next) {
    NoteService.findByUserEmail(req.userEmail)
        .then(function (docs) {
            res.status(200).json(docs);
        }, function (error) {
            res.status(404).send(error);
        });
});

router.post('/create', function (req, res, next) {
    var note = new Note({
        title: req.body.title,
        description: req.body.description,
        userEmail: req.userEmail
    });

    NoteService.create(note)
        .then(function (doc) {
            res.header('Location', '/note/by-id/' + doc._id);
            res.status(201).json(doc);
        }, function (error) {
            res.status(404).send(error);
        });
});

router.put('/update', function (req, res, next) {
    NoteService.findById(req.body._id)
        .then(function (doc) {
            if (doc.userEmail !== req.userEmail) {
                res.status(401).send('Você não tem acesso a notas de outro usuário.');
            } else {
                var note = new Note({
                    _id: req.body._id,
                    title: req.body.title,
                    description: req.body.description
                });

                NoteService.update(note)
                    .then(function (doc) {
                        // the OLD doc
                        console.log(doc);
                        
                        res.status(200).json(note);
                    }, function (error) {
                        res.status(404).send(error);
                    });
            }
        }, function (error) {
            res.status(404).send(error);
        });
});

router.delete('/delete/:id', function (req, res, next) {
    var id = req.params.id;

    NoteService.findById(id)
        .then(function (doc) {
            if (doc.userEmail !== req.userEmail) {
                res.status(401).send('Você não tem acesso a notas de outro usuário.');
            } else {
                NoteService.delete(id)
                    .then(function (doc) {
                        // the OLD doc
                        console.log(doc);

                        res.status(200).json(doc);
                    }, function (error) {
                        res.status(404).send(error);
                    });
            }
        }, function (error) {
            res.status(404).send(error);
        });
});

module.exports = router;