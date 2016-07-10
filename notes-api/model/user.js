/**
 * Created by @atilla8huno on 05/07/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var userSchema = new Schema({
    fullName: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    created: { type: Date, default: Date.now },
    notes: [{ type: Schema.Types.ObjectId, ref: 'Note' }]
});

userSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', userSchema);
