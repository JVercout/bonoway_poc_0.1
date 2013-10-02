/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    async = require('async'),
    Area = mongoose.model('Area'),
    _ = require('underscore');


/**
 * Find area by id
 */
exports.area = function(req, res, next, id) {
    Area.load(id, function(err, area) {
        if (err) return next(err);
        if (!area) return next(new Error('Failed to load area ' + id));
        req.area = area;
        next();
    });
};

/**
 * Create a article
 */
exports.create = function(req, res) {
    var area = new Area(req.body);
    area.user = req.user;
    area.lines = req.body.lines;

    area.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                area: area
            });
        } else {
            res.jsonp(area);
        }
    });
};

/**
 * Update an area
 */
exports.update = function(req, res) {
    var area = req.area;

    area = _.extend(area, req.body);

    area.save(function(err) {
        res.jsonp(area);
    });
};

/**
 * Delete an area
 */
exports.destroy = function(req, res) {
    var area = req.area;

    area.remove(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(area);
        }
    });
};

/**
 * Show an area
 */
exports.show = function(req, res) {
    res.jsonp(req.area);
};

/**
 * List of Areas
 */
exports.all = function(req, res) {
    Area.find().sort('-name').exec(function(err, area) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(area);
        }
    });
};