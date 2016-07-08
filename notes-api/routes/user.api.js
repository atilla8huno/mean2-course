/**
 * Created by atilla8huno on 07/07/16.
 */
var express = require('express');
var router = express.Router();
var UserService = require('../services/user.service');
var User = require('../model/user');

router.get('/user/:id', function (req, res, next) {
    var id = req.params.id;

    UserService.findById(id)
        .then(function (doc) {
            console.log(doc);
        }, function (error) {

        });
});

router.get('/users', function (req, res, next) {
    UserService.getAll(id)
        .then(function (docs) {
            console.log(docs);
        }, function (error) {

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
        }, function (error) {

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
            console.log(doc);
        }, function (error) {

        });
});

router.delete('/delete/:id', function (req, res, next) {
    var id = req.params.id;

    UserService.delete(id)
        .then(function (doc) {
            console.log(doc);
        }, function (error) {

        });
});

module.exports = router;