/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    async = require('async'),
    Bolting = mongoose.model('Bolting'),
    _ = require('underscore');


/**
 * Find Bolting by id
 */
exports.bolting = function(req, res, next, id) {
    Bolting.load(id, function(err, bolting) {
        if (err) return next(err);
        if (!bolting) return next(new Error('Failed to load bolting ' + id));
        req.bolting = bolting;
        next();
    });
};

/**
 * Show an difficulty
 */
exports.show = function(req, res) {
    res.jsonp(req.bolting);
};

/**
 * List of Difficulties
 */
exports.all = function(req, res) {
    Bolting.find().sort('name').exec(function(err, boltings) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(boltings);
        }
    });
};
