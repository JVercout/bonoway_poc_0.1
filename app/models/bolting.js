
var mongoose = require('mongoose'),
    config = require('../../config/config'),
    Schema = mongoose.Schema;

/**
 * Bolting Schema
 */
var BoltingSchema = new Schema({
    name: {
        type: String,
        default: '',
        trim: true
    },
    image: {
        type: Schema.ObjectId,
        ref: 'Image'
    }
});

/**
 * Statics
 */
BoltingSchema.statics = {
    load: function(id, cb) {
        this.findOne({
            _id: id
        }).populate('image').exec(cb);
    }
};

mongoose.model('Bolting', BoltingSchema);