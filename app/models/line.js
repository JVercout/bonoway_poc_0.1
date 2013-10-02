
var mongoose = require('mongoose'),
    config = require('../../config/config'),
    Schema = mongoose.Schema;


/**
 * Line Schema
 */
var LineSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        default: '',
        trim: true
    },
    abstract: {
        type: String,
        default: '',
        trim: true
    },
    difficulty:{
        type: Schema.ObjectId,
        ref: 'Difficulty'
    },
    orientation:{
        type: Schema.ObjectId,
        ref: 'Orientation'
    },
    ethic: {
        type: Schema.ObjectId,
        ref: 'Ethic'
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

/**
 * Validations
 */
LineSchema.path('name').validate(function(name) {
    return name.length;
}, 'Name cannot be blank');

/**
 * Statics
 */
LineSchema.statics = {
    load: function(id, cb) {
        this.findOne({
            _id: id
        }).populate('user', 'name username')
          .populate('difficulty', 'name')
          .populate('orientation', 'name')
          .populate('ethic', 'name')
          .exec(cb);
    }
};

mongoose.model('Line', LineSchema);