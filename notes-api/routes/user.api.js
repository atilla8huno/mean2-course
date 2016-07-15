/**
 * Created by atilla8huno on 07/07/16.
 */
var express = require('express');
var router = express.Router();
var UserService = require('../services/user.service');
var User = require('../model/user');

router.get('/all', function (req, res, next) {
    UserService.findAll()
        .then(function (docs) {
            console.log(docs);

            res.status(200).json(docs);
        }, function (error) {
            res.status(404).send(error);
        });
});

router.get('/by-id/:id', function (req, res, next) {
    var id = req.params.id;

    UserService.findById(id)
        .then(function (doc) {
            console.log(doc);

            res.status(200).json(doc);
        }, function (error) {
            res.status(404).send(error);
        });
});

router.post('/create', function (req, res, next) {
    var user = new User({
        fullName: req.body.fullName,
        password: req.body.password,
        email: req.body.email
    });

    UserService.create(user)
        .then(function (doc) {
            console.log(doc);

            res.header('Location', '/user/id/' + doc._id);
            res.status(201).json(doc);
        }, function (error) {
            res.status(404).send(error);
        });
});

router.put('/update', function (req, res, next) {
    var user = new User({
        _id: req.body._id,
        fullName: req.body.fullName,
        password: req.body.password,
        email: req.body.email
    });

    UserService.update(user)
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

    UserService.delete(id)
        .then(function (doc) {
            // the OLD doc
            console.log(doc);

            res.status(200).json(doc);
        }, function (error) {
            res.status(404).send(error);
        });
});

module.exports = router;