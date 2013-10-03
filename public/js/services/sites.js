//Areas service used for articles REST endpoint
angular.module('mean.sites').factory("Sites", ['$resource', function($resource) {
    return $resource('api/sites/:siteId', {
        siteId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);