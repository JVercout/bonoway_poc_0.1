
var mongoose = require('mongoose'),
    config = require('../../config/config'),
    Schema = mongoose.Schema;

/**
 * Image Schema
 */
var ImageSchema = new Schema({
    name: {
        type: String,
        default: '',
        trim: true
    },
    abstract: {
         type: String
    },
    path: {
        type: String
    }
});

/**
 * Statics
 */
ImageSchema.statics = {
    load: function(id, cb) {
        this.findOne({
            _id: id
        }).exec(cb);
    }
};

mongoose.model('Image', ImageSchema);