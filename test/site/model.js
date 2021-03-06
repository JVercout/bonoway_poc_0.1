/**
 * Module dependencies.
 */
var should = require('should'),
    app = require('../../server'),
    mongoose = require('mongoose'),
    User = mongoose.model('User'),
    Site = mongoose.model('Site');
    Area = mongoose.model('Area');

//Globals
var user;
var site;
var area1;
var area2;

//The tests
describe('<Unit Test>', function() {
    describe('Model Site:', function() {
        beforeEach(function(done) {
            user = new User({
                name: 'Full name',
                email: 'test@test.com',
                username: 'user',
                password: 'password'
            });

            user.save(function(err) {
                area1 = new Area({
                    name: 'Area Associated 1 Name',
                    abstract: 'Abstract Associated 1',
                    user: user
                });

                area2 = new Area({
                    name: 'Area Associated 2 Name',
                    abstract: 'Abstract Associated 2',
                    user: user
                });

                site = new Site({
                    name: 'Site Name',
                    abstract: 'Site Abstract',
                    areas: [area1, area2],
                    user: user
                });

                done();
            });
        });

        describe('Method Save', function() {
            it('should be able to save whithout problems', function(done) {
                return site.save(function(err) {
                    should.not.exist(err);
                    done();
                });
            });

            it('should be able to show an error when try to save witout name', function(done) {
                site.name = '';

                return site.save(function(err) {
                    should.exist(err);
                    done();
                });
            });
        });

        describe('Method get areas', function(){
            it('should be able to get areas', function(){
                return should.exist(site.areas[0]) && should.exist(site.areas[1]);
            });
        });

        afterEach(function(done) {
            done();
        });
    });
});