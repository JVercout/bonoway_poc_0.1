//Difficulties service used for articles REST endpoint
angular.module('mean.rocks').factory("Rocks", ['$resource', function($resource) {
    return $resource('api/rocks/:rockId', {
        rockId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);