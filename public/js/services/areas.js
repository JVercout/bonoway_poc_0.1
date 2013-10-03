//Areas service used for articles REST endpoint
angular.module('mean.areas').factory("Areas", ['$resource', function($resource) {
    return $resource('api/areas/:areaId', {
        areaId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);