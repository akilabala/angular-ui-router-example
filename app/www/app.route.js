(function(angular, window, undefined) {
    'use strict';

    angular
        .module('myApp', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('home', {
                    url: '/',
                    views: {
                        imgView: {
                            templateUrl: 'www/partials/homeImg.html'
                        },
                        contentView: {
                            templateUrl: 'www/partials/home.html'
                        }
                    }
                })
                .state('description', {
                    url: '/description',
                    views: {
                        imgView: {
                            templateUrl: 'www/partials/descriptionImg.html'
                        },
                        contentView: {
                            templateUrl: 'www/partials/description.html'
                        }
                    }
                });
        });
}(angular, window));