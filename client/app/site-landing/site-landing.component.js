(function(){

  'use strict';

  angular.module('app')
    .component('siteLanding', {
      controller  :  controller,
      templateUrl : 'app/site-landing/site-landing.view.html',
      css         : 'app/site-landing/site-landing.style.css'
    })

  controller.$inject['$http']
  function controller($http) {
    const vm = this;

    vm.$onInit = function() {
      $http.get('/blog_entries.json')
      .then(function(response) {
        vm.blog_entries = response.data
      })
    }
  }

}());
