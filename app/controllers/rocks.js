/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    async = require('async'),
    Rock = mongoose.model('Rock'),
    _ = require('underscore');


/**
 * Find Rock by id
 */
exports.rock = function(req, res, next, id) {
    Rock.load(id, function(err, rock) {
        if (err) return next(err);
        if (!rock) return next(new Error('Failed to load rock ' + id));
        req.rock = rock;
        next();
    });
};

/**
 * Show an Rock
 */
exports.show = function(req, res) {
    res.jsonp(req.rock);
};

/**
 * List of Rocks
 */
exports.all = function(req, res) {
    Rock.find().sort('name').exec(function(err, rocks) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(rocks);
        }
    });
};
