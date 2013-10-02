/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    async = require('async'),
    Difficulty = mongoose.model('Difficulty'),
    _ = require('underscore');


/**
 * Find difficulty by id
 */
exports.difficulty = function(req, res, next, id) {
    Difficulty.load(id, function(err, difficulty) {
        if (err) return next(err);
        if (!difficulty) return next(new Error('Failed to load difficulty ' + id));
        req.difficulty = difficulty;
        next();
    });
};

/**
 * Show an difficulty
 */
exports.show = function(req, res) {
    res.jsonp(req.difficulty);
};

/**
 * List of Difficulties
 */
exports.all = function(req, res) {
    Difficulty.find().sort('-order').exec(function(err, difficulties) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(difficulties);
        }
    });
};
