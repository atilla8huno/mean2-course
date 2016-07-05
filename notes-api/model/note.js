/**
 * Created by @atilla8huno on 05/07/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('../model/user');

var noteSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    created: { type: Date, default: Date.now },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});

noteSchema.post('remove', function(doc) {
    var deletedNote = doc;
    
    User.findById(doc.user, function(err, doc) {
        doc.notes.pull(deletedNote);
        doc.save();
    });
});

module.exports = mongoose.model('Note', noteSchema);
