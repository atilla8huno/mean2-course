/**
 * Created by atilla8huno on 15/07/2016.
 */
var firebase = require('firebase');
var Promise = require('promise');

// Firebase setup
firebase.initializeApp({
    serviceAccount: "./connection/firebase.json",
    authDomain: "mean-course-2.firebaseapp.com",
    databaseURL: "https://mean-course-2.firebaseio.com"
});

var auth = firebase.auth();

var firebaseService = {
    validateToken: validateToken
};

function validateToken(token) {
    return new Promise(function (resolve, reject) {
        auth.verifyIdToken(token)
            .then(function (user) {
                resolve(user);
            }, function (error) {
                reject(error);
            });
    });
}

module.exports = firebaseService;