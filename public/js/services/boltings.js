//Difficulties service used for articles REST endpoint
angular.module('mean.boltings').factory("Boltings", ['$resource', function($resource) {
    return $resource('api/boltings/:boltingId', {
        boltingId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);