/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    async = require('async'),
    Site = mongoose.model('Site'),
    _ = require('underscore');


/**
 * Find site by id
 */
exports.site = function(req, res, next, id) {
    Site.load(id, function(err, site) {
        if (err) return next(err);
        if (!site) return next(new Error('Failed to load site ' + id));
        req.site = site;
        next();
    });
};

/**
 * Create a site
 */
exports.create = function(req, res) {
    var site = new Site(req.body);
    site.user = req.user;
    site.areas = req.body.areas;

    site.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                site: site
            });
        } else {
            res.jsonp(site);
        }
    });
};

/**
 * Update a site
 */
exports.update = function(req, res) {
    var site = req.site;

    site = _.extend(site, req.body);

    site.save(function(err) {
        res.jsonp(site);
    });
};

/**
 * Delete an site
 */
exports.destroy = function(req, res) {
    var site = req.site;

    site.remove(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(site);
        }
    });
};

/**
 * Show an site
 */
exports.show = function(req, res) {
    res.jsonp(req.site);
};

/**
 * List of Sites
 */
exports.all = function(req, res) {
    Site.find().sort('-name')
                .populate('user', 'username name')
                .populate('area', 'name')
                .exec(function(err, site) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(site);
        }
    });
};

/**
 *  Add/Remove Area to site
 */