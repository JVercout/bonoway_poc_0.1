
var mongoose = require('mongoose'),
    config = require('../../config/config'),
    Schema = mongoose.Schema;

/**
 * Ethic Schema
 */
    //MultiPitch
    //Boulder
    //Cliffs
    //Psycho-bloc
var EthicSchema = new Schema({
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
EthicSchema.statics = {
    load: function(id, cb) {
        this.findOne({
            _id: id
        }).populate('image').exec(cb);
    }
};

mongoose.model('Ethic', EthicSchema);