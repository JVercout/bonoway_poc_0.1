angular.module('mean.ethics').controller('EthicsController', ['$scope', '$routeParams', '$location', 'Global', 'Ethics', function ($scope, $routeParams, $location, Global, Ethics) {
    $scope.global = Global;
}]);