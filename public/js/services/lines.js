//Lines service used for articles REST endpoint
angular.module('mean.lines').factory("Lines", ['$resource', function($resource) {
    return $resource('api/lines/:lineId', {
        lineId: '@_id'
    },
    {
        update: { method: 'PUT' }
    });
}]);