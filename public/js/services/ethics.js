//Difficulties service used for articles REST endpoint
angular.module('mean.ethics').factory("Ethics", ['$resource', function($resource) {
    return $resource('api/ethics/:ethicId', {
        ethicId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);