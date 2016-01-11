(function (){

    var domainControllers;
    domainControllers = angular.module('domainControllers', ['domainServices']);

    domainControllers.controller("DashboardCtrl", ['$scope', 'Domain', function ($scope, Domain){
        $scope.title = "Dashboard";
        $scope.domains = Domain.query()
    }]);

    domainControllers.controller("AddDomainCtrl", ['$scope', 'Domain', function ($scope, Domain){
        $scope.title = "Add Domain";
        $scope.error = false;
        $scope.addDomain = function(url){
            Domain.add({url: url}, function(response){
                if (response.url != undefined) {
                    if (response.url[0] == 'Enter a valid value.') {
                        $scope.error = true
                    }
                    else {
                        window.location.replace('/')
                    }
                }
            });
        }
    }]);


}).call(this);
