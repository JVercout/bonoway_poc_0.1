angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [{
        "title": "Lines",
        "link": "lines"
    }, {
        "title": "Create New Line",
        "link": "lines/create"
    },{
         "title": "Areas",
         "link": "areas"
    },{
        "title": "Sites",
        "link": "sites"
    }];
}]);