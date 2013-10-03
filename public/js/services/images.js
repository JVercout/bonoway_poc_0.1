//Image Meta-Data service used for articles REST endpoint
angular.module('mean.images').factory("Images", ['$resource', function($resource) {
    return $resource('api/images/:imageId', {
        imageId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);