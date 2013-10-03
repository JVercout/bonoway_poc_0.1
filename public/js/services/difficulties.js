//Difficulties service used for articles REST endpoint
angular.module('mean.difficulties').factory("Difficulties", ['$resource', function($resource) {
    return $resource('api/difficulties/:difficultyId', {
        difficultyId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);