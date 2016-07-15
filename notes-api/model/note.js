/**
 * Created by atilla8huno on 05/07/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var noteSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    created: { type: Date, default: Date.now },
    userEmail: { type: String, required: true }
});

module.exports = mongoose.model('Note', noteSchema);