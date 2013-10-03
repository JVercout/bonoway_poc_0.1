angular.module('mean.boltings').controller('BoltingsController', ['$scope', '$routeParams', '$location', 'Global', 'Boltings', function ($scope, $routeParams, $location, Global, Boltings) {
    $scope.global = Global;
}]);