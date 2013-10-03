angular.module('mean.sites').controller('SitesController', ['$scope', '$routeParams', '$location', 'Global', 'Sites', 'Areas', function ($scope, $routeParams, $location, Global, Sites, Areas) {
    $scope.global = Global;


    $scope.create = function() {
        var site = new Sites({
            name: this.name,
            abstract: this.abstract,
            areas : this.areas
        });

        site.$save(function(response) {
            $location.path("api/sites/" + response._id);
        });

        this.name = "";
        this.abstract = "";
        this.areas = [];
    };

    $scope.remove = function(site) {
        site.$remove();

        for (var i in $scope.sites) {
            if ($scope.sites[i] == site) {
                $scope.sites.splice(i, 1);
            }
        }
    };

    $scope.update = function() {
        var site = $scope.site;
        if (!site.updated) {
            site.updated = [];
        }
        site.updated.push(new Date().getTime());

        site.$update(function() {
            $location.path('api/sites/' + site._id);
        });
    };

    $scope.find = function(query) {
        Sites.query(query, function(sites) {
            $scope.sites = sites;
        });
    };

    $scope.findOne = function() {
        Sites.get({
            siteId: $routeParams.siteId
        }, function(site) {
            $scope.site = site;
        });
    };
}]);