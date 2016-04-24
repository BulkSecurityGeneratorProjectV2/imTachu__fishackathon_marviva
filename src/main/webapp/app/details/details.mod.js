angular.module('marvivaApp')
        .config(['$stateProvider', function ($stateProvider) {
                $stateProvider.state('details', {
                    url: '/details/{id:int}',
                    templateUrl: 'app/details/details.html',
                    controller: 'detailsCtrl',
                    abstract: true,
                    resolve: {
                        fish: ['Restangular', '$stateParams', function (r, params) {
                                return r.one('fish', params.id).get();
                            }]
                    }
                }).state('details.consumer', {
                    url: '/consumer',
                    templateUrl: 'app/details/consumer.html'
                }).state('details.bio', {
                    url: '/bio',
                    templateUrl: 'app/details/consumer.html'
                }).state('details.commercial', {
                    url: '/commercial',
                    templateUrl: 'app/details/consumer.html'
                }).state('details.nutrition', {
                    url: '/nutrition',
                    templateUrl: 'app/details/consumer.html'
                }).state('details.economy', {
                    url: '/economy',
                    templateUrl: 'app/details/consumer.html'
                }).state('details.regulation', {
                    url: '/regulation',
                    templateUrl: 'app/details/consumer.html'
                });
            }]);