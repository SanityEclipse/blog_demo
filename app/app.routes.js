(function() {

  'use strict';

  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider){

    $locationProvider.html5Mode(true)

    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state({
        name: 'landing',
        url: '/',
        component: 'siteLanding',
      })
  }

}());
