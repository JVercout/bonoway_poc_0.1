/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    config = require('../../config/config'),
    Schema = mongoose.Schema;


/**
 * Area Schema
 */
var AreaSchema = new Schema({
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
    orientation:{
        type: Schema.ObjectId,
        ref: 'Orientation'
    },
    ethic: {
        type: Schema.ObjectId,
        ref: 'Ethic'
    },
    approach:{
        type: Number
    },
    rock:{
        type: Schema.ObjectId,
        ref: 'Rock'
    },
    image:{
        type: Schema.ObjectId,
        ref: 'Image'
    },
    lines:[{
        type: Schema.ObjectId,
        ref: 'Line'
    }],
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

/**
 * Validations
 */
AreaSchema.path('name').validate(function(name) {
    return name.length;
}, 'Name cannot be blank');

/**
 * Statics
 */
AreaSchema.statics = {
    load: function(id, cb) {
        this.findOne({
            _id: id
        }).populate('user', 'name username')
          .populate('orientation')
          .populate('ethic')
          .populate('rock')
          .populate('lines', 'name difficulty')
          .populate('image')
          .exec(cb);
    }
};

mongoose.model('Area', AreaSchema);