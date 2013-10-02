/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    config = require('../../config/config'),
    Schema = mongoose.Schema;

/**
 * Difficulty Schema
 */
var DifficultySchema = new Schema({
    name: {
        type: String,
        default: '',
        trim: true
    },
    order: {
        type: Number
    }
});

/**
 * Statics
 */
DifficultySchema.statics = {
    load: function(id, cb) {
        this.findOne({
            _id: id
        }).exec(cb);
    }
};

mongoose.model('Difficulty', DifficultySchema);