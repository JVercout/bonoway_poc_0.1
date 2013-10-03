angular.module('mean.orientations').controller('OrientationsController', ['$scope', '$routeParams', '$location', 'Global', 'Orientations', function ($scope, $routeParams, $location, Global, Orientations) {
    $scope.global = Global;
}]);