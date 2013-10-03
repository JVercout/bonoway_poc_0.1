/**
 * Module dependencies.
 */

var mongoose = require('mongoose'),
    config = require('../../config/config'),
    Schema = mongoose.Schema;


/**
 * Site Schema
 */
var SiteSchema = new Schema({
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
    areas:[{
        type: Schema.ObjectId,
        ref: 'Area'
    }],
    images:{
        type: Schema.ObjectId,
        ref: 'Image'
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

/**
 * Validations
 */
SiteSchema.path('name').validate(function(name) {
    return name.length;
}, 'Name cannot be blank');

/**
 * Statics
 */
SiteSchema.statics = {
    load: function(id, cb) {
        this.findOne({
            _id: id
        }).populate('user', 'name username')
          .populate('areas', 'name abstract')
          .populate('image')
          .exec(cb);
    }
};

mongoose.model('Site', SiteSchema);