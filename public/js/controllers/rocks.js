angular.module('mean.rocks').controller('RocksController', ['$scope', '$routeParams', '$location', 'Global', 'Rocks', function ($scope, $routeParams, $location, Global, Rocks) {
    $scope.global = Global;
}]);