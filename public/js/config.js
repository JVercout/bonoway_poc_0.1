//Setting up route
window.app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/lines',{
            templateUrl: 'views/lines/list.html'
        }).
        when('/lines/create',{
            templateUrl: 'views/lines/create.html'
        }).
        when('/lines/:lineId/edit', {
            templateUrl: 'views/lines/edit.html'
        }).
        when('/lines/:lineId', {
            templateUrl: 'views/lines/view.html'
        }).
        when('/areas',{
            templateUrl: 'views/areas/list.html'
        }).
        when('/areas/create',{
            templateUrl: 'views/areas/create.html'
        }).
        when('/areas/:areaId/edit', {
            templateUrl: 'views/areas/edit.html'
        }).
        when('/areas/:areaId', {
            templateUrl: 'views/areas/view.html'
        }).
        when('/sites',{
            templateUrl: 'views/sites/list.html'
        }).
        when('/sites/create',{
            templateUrl: 'views/sites/create.html'
        }).
        when('/sites/:siteId/edit', {
            templateUrl: 'views/sites/edit.html'
        }).
        when('/sites/:siteId', {
            templateUrl: 'views/sites/view.html'
        }).
        when('/', {
            templateUrl: 'views/index.html'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);

//Setting HTML5 Location Mode
window.app.config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix("!");
    }
]);