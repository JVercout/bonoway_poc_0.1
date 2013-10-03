angular.module('mean.lines').controller('LinesController', ['$scope', '$routeParams', '$location', 'Global', 'Lines', 'Difficulties', 'Orientations', 'Ethics', function ($scope, $routeParams, $location, Global, Lines, Difficulties, Orientations, Ethics) {
    $scope.global = Global;

    $scope.populate = function(query){
        $scope.populateDifficulties(query);
    };

    $scope.populateDifficulties=function(query){
        Difficulties.query(query, function(difficulties){
            $scope.difficulties = difficulties;
        });
    };

    $scope.create = function() {
        var line = new Lines({
            name: this.name,
            abstract: this.abstract,
            length: this.length,
            difficulty: this.difficulty,
            bolting: this.bolting,
            images: this.images
        });
        line.$save(function(response) {
            $location.path("api/lines/" + response._id);
        });

        this.name = "";
        this.abstract = "";
        this.length="";
        this.difficulty="";
        this.bolting = "";
        this.images=[];
    };

    $scope.remove = function(line) {
        line.$remove();

        for (var i in $scope.lines) {
            if ($scope.lines[i] == line) {
                $scope.lines.splice(i, 1);
            }
        }
    };

    $scope.update = function() {
        var line = $scope.line;
        if (!line.updated) {
            line.updated = [];
        }
        line.updated.push(new Date().getTime());

        line.$update(function() {
            $location.path('api/lines/' + line._id);
        });
    };

    $scope.find = function(query) {
        Lines.query(query, function(lines) {
            $scope.lines = lines;
        });
    };

    $scope.findOne = function() {
        Lines.get({
            lineId: $routeParams.lineId
        }, function(line) {
            $scope.line = line;
        });
    };
}]);