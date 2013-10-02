/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    async = require('async'),
    Line = mongoose.model('Line'),
    _ = require('underscore');


/**
 * Find line by id
 */
exports.line = function(req, res, next, id) {
    Line.load(id, function(err, line) {
        if (err) return next(err);
        if (!line) return next(new Error('Failed to load line ' + id));
        req.line = line;
        next();
    });
};

/**
 * Create a line
 */
exports.create = function(req, res) {
    var line = new Line(req.body);
    line.user = req.user;
    line.difficulty=req.body.difficulty;
    line.orientation = req.body.orientation;
    line.ethic = req.body.ethic;

    line.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                line: line
            });
        }
        else {
            res.jsonp(line);
        }
    });
};

/**
 * Update a line
 */
exports.update = function(req, res) {
    var line = req.line;

    line = _.extend(line, req.body);

    line.save(function(err) {
        res.jsonp(line);
    });
};

/**
 * Delete an line
 */
exports.destroy = function(req, res) {
    var line = req.line;

    line.remove(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(line);
        }
    });
};

/**
 * Show an line
 */
exports.show = function(req, res) {
    res.jsonp(req.line);
};

/**
 * List of Lines
 */
exports.all = function(req, res) {
    Line.find().sort('-created')
        .exec(function(err, lines) {
            if (err) {
                res.render('error', {status: 500});
            } else {
                res.jsonp(lines);
            }
        });
};