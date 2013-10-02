/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    async = require('async'),
    Ethic = mongoose.model('Ethic'),
    _ = require('underscore');


/**
 * Find difficulty by id
 */
exports.ethic = function(req, res, next, id) {
    Ethic.load(id, function(err, ethic) {
        if (err) return next(err);
        if (!ethic) return next(new Error('Failed to load ethic ' + id));
        req.ethic = ethic;
        next();
    });
};

/**
 * Show an difficulty
 */
exports.show = function(req, res) {
    res.jsonp(req.ethic);
};

/**
 * List of Difficulties
 */
exports.all = function(req, res) {
    Ethic.find().sort('name').exec(function(err, ethics) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(ethics);
        }
    });
};
