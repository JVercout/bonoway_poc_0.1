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
    image:{
        type: Schema.ObjectId,
        ref: 'Image'
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
        }).populate('image').exec(cb);
    }
};

mongoose.model('Difficulty', DifficultySchema);