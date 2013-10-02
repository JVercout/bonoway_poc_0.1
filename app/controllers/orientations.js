/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    async = require('async'),
    Orientation = mongoose.model('Orientation'),
    _ = require('underscore');


/**
 * Find Orientation by id
 */
exports.orientation = function(req, res, next, id) {
    Orientation.load(id, function(err, orientation) {
        if (err) return next(err);
        if (!orientation) return next(new Error('Failed to load orientation ' + id));
        req.orientation = orientation;
        next();
    });
};

/**
 * Show an Orientation
 */
exports.show = function(req, res) {
    res.jsonp(req.orientation);
};

/**
 * List of Orientation
 */
exports.all = function(req, res) {
    Orientation.find().sort('-order').exec(function(err, orientations) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(orientations);
        }
    });
};
