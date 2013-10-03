
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
    length:{
        type: Number
    },
    bolting:{
        type: Schema.ObjectId,
        ref: 'Bolting'
    },
    difficulty:{
        type: Schema.ObjectId,
        ref: 'Difficulty'
    },

    images: [{
        type: Schema.ObjectId,
        ref: 'Image'
    }],
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
          .populate('bolting')
          .populate('images', 'name path')
          .exec(cb);
    }
};

mongoose.model('Line', LineSchema);