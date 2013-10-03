
var mongoose = require('mongoose'),
    config = require('../../config/config'),
    Schema = mongoose.Schema;

/**
 * Rock Schema
 */
var RockSchema = new Schema({
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
RockSchema.statics = {
    load: function(id, cb) {
        this.findOne({
            _id: id
        }).populate('image').exec(cb);
    }
};

mongoose.model('Rock', RockSchema);