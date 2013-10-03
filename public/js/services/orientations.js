//Orientations service used for articles REST endpoint
angular.module('mean.orientations').factory("Orientations", ['$resource', function($resource) {
    return $resource('api/orientations/:orientationId', {
        orientationId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);