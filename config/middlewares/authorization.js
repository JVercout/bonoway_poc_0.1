/**
 * Generic require login routing middleware
 */
exports.requiresLogin = function(req, res, next) {
    if (!req.isAuthenticated()) {
        return res.send(401, 'User is not authorized');
    }
    next();
};

/**
 * User authorizations routing middleware
 */
exports.user = {
    hasAuthorization: function(req, res, next) {
        if (req.profile.id != req.user.id) {
            return res.send(401, 'User is not authorized');
        }
        next();
    }
};

/**
 * Site authorizations routing middleware
 */
exports.site = {
    hasAuthorization: function(req, res, next) {
        if (req.site.user.id != req.user.id) {
            return res.send(401, 'User is not authorized');
        }
        next();
    }
};

/**
 * Line authorizations routing middleware
 */
exports.line = {
    hasAuthorization: function(req, res, next) {
        if (req.line.user.id != req.user.id) {
            return res.send(401, 'User is not authorized');
        }
        next();
    }
};

/**
 * Area authorizations routing middleware
 */
exports.area = {
    hasAuthorization: function(req, res, next) {
        if (req.area.user.id != req.user.id) {
            return res.send(401, 'User is not authorized');
        }
        next();
    }
};