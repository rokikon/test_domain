(function (){
    var domainServices = angular.module('domainServices', ['ngResource']);
    domainServices.config(['$resourceProvider', function($resourceProvider) {
        $resourceProvider.defaults.stripTrailingSlashes = false;
    }]);
    domainServices.factory('Domain', ['$resource',
        function($resource){
            return $resource('/api/domains/', {}, {
                query: {method:'GET', params:{}, isArray:true},
                add: {method:"POST", params:{url:'@url'}}
            })
        }
    ])
}).call(this);
