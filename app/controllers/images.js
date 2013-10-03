/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    async = require('async'),
    Image = mongoose.model('Image'),
    _ = require('underscore');


/**
 * Find difficulty by id
 */
exports.image = function(req, res, next, id) {
    Image.load(id, function(err, image) {
        if (err) return next(err);
        if (!image) return next(new Error('Failed to load image ' + id));
        req.ethic = image;
        next();
    });
};

///**
// * Create a image
// */
//exports.create = function(req, res) {
//    var image = new Image(req.body);
//    image.user = req.user;
//
//    var fs = require('fs');
//    var path = require('path');
//    var tempPath = req.files.image.path,
//        targetPath = path.resolve('./images');
//
//fs.rename(tempPath, targetPath, function(err){
//    if(err) throw err;
//    console.log("Upload Completed!");
//});
//
//    image.save(function(err) {
//        if (err) {
//            return res.send('users/signup', {
//                errors: err.errors,
//                line: image
//            });
//        }
//        else {
//            res.jsonp(image);
//        }
//    });
//};

/**
 * Show an difficulty
 */
exports.show = function(req, res) {
    res.jsonp(req.image);
};

/**
 * List of Difficulties
 */
exports.all = function(req, res) {
    Image.find().exec(function(err, ethics) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(ethics);
        }
    });
};
