
var mongoose = require('mongoose'),
    config = require('../../config/config'),
    Schema = mongoose.Schema;

/**
 * Orientation Schema
 */
var OrientationSchema = new Schema({
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
OrientationSchema.statics = {
    load: function(id, cb) {
        this.findOne({
            _id: id
        }).exec(cb);
    }
};

mongoose.model('Orientation', OrientationSchema);