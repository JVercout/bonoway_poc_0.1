angular.module('mean.difficulties').controller('DifficultiesController', ['$scope', '$routeParams', '$location', 'Global', 'Difficulties', function ($scope, $routeParams, $location, Global, Difficulties) {
    $scope.global = Global;
}]);