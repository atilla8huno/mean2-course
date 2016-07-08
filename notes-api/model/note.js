/**
 * Created by atilla8huno on 05/07/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserService = require('../services/user.service');

var noteSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    created: { type: Date, default: Date.now },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});

noteSchema.post('remove', function(doc) {
    var deletedNote = doc;

    UserService.findById(doc.user)
        .then(function (user) {
            user.notes.pull(deletedNote);
            UserService.update(user);
        });
});

module.exports = mongoose.model('Note', noteSchema);