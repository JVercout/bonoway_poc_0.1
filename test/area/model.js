/**
 * Module dependencies.
 */
var should = require('should'),
    app = require('../../server'),
    mongoose = require('mongoose'),
    User = mongoose.model('User'),
    Area = mongoose.model('Area');

//Globals
var user;
var area;

//The tests
describe('<Unit Test>', function() {
    describe('Model Area:', function() {
        beforeEach(function(done) {
            user = new User({
                name: 'Full name',
                email: 'test@test.com',
                username: 'user',
                password: 'password'
            });

            user.save(function(err) {                
                area = new Area({
                    name: 'Area Name',
                    abstract: 'Area Abstract',
                    user: user
                });

                done();
            });
        });

        describe('Method Save', function() {
            it('should be able to save whithout problems', function(done) {
                return area.save(function(err) {
                    should.not.exist(err);
                    done();
                });
            });

            it('should be able to show an error when try to save witout name', function(done) {
                area.name = '';

                return area.save(function(err) {
                    should.exist(err);
                    done();
                });
            });
        });

        afterEach(function(done) {
            done();
        });
    });
});