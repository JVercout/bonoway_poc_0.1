/**
 * Module dependencies.
 */
var should = require('should'),
    app = require('../../server'),
    mongoose = require('mongoose'),
    User = mongoose.model('User'),
    Line = mongoose.model('Line');
    Difficulty = mongoose.model('Difficulty');
    Orientation = mongoose.model('Orientation');
    Ethic = mongoose.model('Ethic');

//Globals
var user;
var line;
var d_3a;
var d_5a;
var o_N;
var o_S;
var e_boulder;
var e_multipitch;


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
                d_3a = new Difficulty({
                    name: '3a',
                    order: 1
                });

//                d_5a = new Difficulty({
//                    name: '5a',
//                    order: 5
//                });

                o_N = new Orientation({
                    name: 'North',
                    order: 0
                });

//                o_S = new Orientation({
//                    name: 'South',
//                    order: 180
//                });

                e_boulder = new Ethic({name: 'Boulder'});
//                e_multipitch = new Ethic({name: 'MultiPitch'});

                line = new Line({
                    name: 'Line Name',
                    abstract: 'Line Abstract',
                    difficulty: d_3a,
                    orientation: o_N,
                    ethic: e_boulder,
                    user: user
                });

                done();
            });
        });

        describe('Method Save', function() {
            it('should be able to save whithout problems', function(done) {
                return line.save(function(err) {
                    should.not.exist(err);
                    done();
                });
            });

            it('should be able to show an error when try to save witout name', function(done) {
                line.name = '';

                return line.save(function(err) {
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