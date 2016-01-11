(function (){
    'use strict';

    /* App Module */

    var domainApp = angular.module('domainApp', [
        'ngRoute',
        'domainControllers'
    ]);

    domainApp.config(['$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider) {
            $routeProvider.
                when('/', {
                    templateUrl: '/static/partials/dashboard.html',
                    controller: 'DashboardCtrl'
                }).
                when('/add/', {
                    templateUrl: '/static/partials/add_domain.html',
                    controller: 'AddDomainCtrl',
                    stylesUrl: '/app/css/styles.css'
                }).
                otherwise({
                    redirectTo: '/'
                });
            $locationProvider.html5Mode({
                enabled : true,
                requireBase: false
            });
        }]);

}).call(this);