var async = require('async');

module.exports = function(app, passport, auth) {
    //User Routes
    var users = require('../app/controllers/users');
    app.get('/signin', users.signin);
    app.get('/signup', users.signup);
    app.get('/signout', users.signout);

    //Setting up the users api
    app.post('/users', users.create);

    app.post('/users/session', passport.authenticate('local', {
        failureRedirect: '/signin',
        failureFlash: 'Invalid email or password.'
    }), users.session);

    app.get('/users/me', users.me);
    app.get('/users/:userId', users.show);

    //Setting the facebook oauth routes
    app.get('/auth/facebook', passport.authenticate('facebook', {
        scope: ['email', 'user_about_me'],
        failureRedirect: '/signin'
    }), users.signin);

    app.get('/auth/facebook/callback', passport.authenticate('facebook', {
        failureRedirect: '/signin'
    }), users.authCallback);

    //Setting the github oauth routes
    app.get('/auth/github', passport.authenticate('github', {
        failureRedirect: '/signin'
    }), users.signin);

    app.get('/auth/github/callback', passport.authenticate('github', {
        failureRedirect: '/signin'
    }), users.authCallback);

    //Setting the twitter oauth routes
    app.get('/auth/twitter', passport.authenticate('twitter', {
        failureRedirect: '/signin'
    }), users.signin);

    app.get('/auth/twitter/callback', passport.authenticate('twitter', {
        failureRedirect: '/signin'
    }), users.authCallback);

    //Setting the google oauth routes
    app.get('/auth/google', passport.authenticate('google', {
        failureRedirect: '/signin',
        scope: [
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email'
        ]
    }), users.signin);

    app.get('/auth/google/callback', passport.authenticate('google', {
        failureRedirect: '/signin'
    }), users.authCallback);

    //Finish with setting up the userId param
    app.param('userId', users.user);

    //Site Routes
    var sites = require('../app/controllers/sites');
    app.get('/api/sites', sites.all);
    app.post('/api/sites', auth.requiresLogin, sites.create);
    app.get('/api/sites/:siteId', sites.show);
    app.get('/api/sites/:siteId/areas', sites.showAreas);
    app.put('/api/sites/:siteId', auth.requiresLogin, auth.site.hasAuthorization, sites.update);
    app.del('/api/sites/:siteId', auth.requiresLogin, auth.site.hasAuthorization, sites.destroy);

    //Finish with setting up the articleId param
    app.param('siteId', sites.site);

    //Lines Routes
    var lines = require('../app/controllers/lines');
    app.get('/api/lines', lines.all);
    app.post('/api/lines', auth.requiresLogin, lines.create);
    app.get('/api/lines/:lineId', lines.show);
    app.put('/api/lines/:lineId', auth.requiresLogin, auth.line.hasAuthorization, lines.update);
    app.del('/api/lines/:lineId', auth.requiresLogin, auth.line.hasAuthorization, lines.destroy);
    app.param('lineId', lines.line);

    //Difficulty Routes
    var difficulties = require('../app/controllers/difficulties');
    app.get('/api/difficulties', difficulties.all);
    app.get('/api/difficulties/:difficultyId', difficulties.show);
    app.param('difficultyId', difficulties.difficulty);

    //Orientation Routes
    var orientations = require('../app/controllers/orientations');
    app.get('/api/orientations', orientations.all);
    app.get('/api/orientations/:orientationId', orientations.show);
    app.param('orientationId', orientations.orientation);

    //Ethic Routes
    var ethics = require('../app/controllers/ethics');
    app.get('/api/ethics', ethics.all);
    app.get('/api/ethics/:ethicId', ethics.show);
    app.param('ethicId', ethics.ethic);

    //Boltings Routes
    var boltings = require('../app/controllers/boltings');
    app.get('/api/boltings', boltings.all);
    app.get('/api/boltings/:boltingId', boltings.show);
    app.param('boltingId', boltings.bolting);

    //Rocks Routes
    var rocks = require('../app/controllers/rocks');
    app.get('/api/rocks', rocks.all);
    app.get('/api/rocks/:rockId', rocks.show);
    app.param('rockId', rocks.rock);


    //Area Routes
    var areas = require('../app/controllers/areas');
    app.get('/api/areas', areas.all);
    app.post('/api/areas', auth.requiresLogin, areas.create);
    app.get('/api/areas/:areaId', areas.show);
    app.put('/api/areas/:areaId', auth.requiresLogin, auth.area.hasAuthorization, areas.update);
    app.del('/api/areas/:areaId', auth.requiresLogin, auth.area.hasAuthorization, areas.destroy);
    app.param('areaId', areas.area);


    //Images Routes
    var images = require('../app/controllers/images');
    app.get('/api/images/:imageId', images.show);
    app.param('imageId', images.image);



    //WIP
    app.post('/upload', function(req,res){
        var tmp_path = req.files.image.path;
        var target_path = './tmp/' + req.files.image.name;

        var fs = require('fs');
        fs.rename(tmp_path, target_path, function(err){
            if(err) throw err;
            fs.unlink(tmp_path, function(err){
                if(err) throw err;
            });
        });
    });

    //Home route
    var index = require('../app/controllers/index');
    app.get('/', index.render);

};