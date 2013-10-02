
var mongoose = require('mongoose'),
    config = require('../../config/config'),
    Schema = mongoose.Schema;

/**
 * Ethic Schema
 */
var EthicSchema = new Schema({
    name: {
        type: String,
        default: '',
        trim: true
    }
});

/**
 * Statics
 */
EthicSchema.statics = {
    load: function(id, cb) {
        this.findOne({
            _id: id
        }).exec(cb);
    }
};

mongoose.model('Ethic', EthicSchema);