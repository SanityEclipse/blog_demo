(function(){

  'use strict';

  angular.module('app')
    .component('navBar', {
      controller  :  controller,
      templateUrl : 'app/site-layout/nav-bar/nav-bar.view.html',
      css         : 'app/site-layout/nav-bar/nav-bar.style.css'
    })

  function controller() {
    const vm = this;

    vm.isNavCollapsed = true;
    vm.isCollapsed = false;
    vm.isCollapsedHorizontal = false;

  }

}());
