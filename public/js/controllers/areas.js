angular.module('mean.areas').controller('AreasController', ['$scope', '$routeParams', '$location', 'Global', 'Areas', 'Lines', function ($scope, $routeParams, $location, Global, Areas, Lines) {
    $scope.global = Global;


    $scope.populate = function(query){
        $scope.populateOrientation(query);
        $scope.populateEthic(query);
    };

    $scope.populateOrientation = function(query){
        Orientations.query(query, function(orientations){
            $scope.orientations = orientations;
        });
    };

    $scope.populateEthic = function(query){
        Ethics.query(query, function(ethics){
            $scope.ethics = ethics;
        });
    };

    $scope.create = function() {
        var area = new Areas({
            name: this.name,
            abstract: this.abstract,
            approach: this.approach,
            orientation: this.orientation,
            ethic : this.ethic,
            rock : this.rock,
            lines: this.lines
        });

        area.$save(function(response) {
            $location.path("api/areas/" + response._id);
        });

        this.name = "";
        this.abstract = "";
        this.approach = "";
        this.orientation = "";
        this.ethic = "";
        this.rock = "";
        this.lines=[];
    };

    $scope.remove = function(area) {
        area.$remove();

        for (var i in $scope.areas) {
            if ($scope.areas[i] == area) {
                $scope.areas.splice(i, 1);
            }
        }
    };

    $scope.update = function() {
        var area = $scope.area;
        if (!area.updated) {
            area.updated = [];
        }
        area.updated.push(new Date().getTime());

        area.$update(function() {
            $location.path('api/areas/' + area._id);
        });
    };

    $scope.find = function(query) {
        Areas.query(query, function(areas) {
            $scope.areas = areas;
        });
    };

    $scope.findOne = function() {
        Areas.get({
            areaId: $routeParams.areaId
        }, function(area) {
            $scope.area = area;
        });
    };
}]);