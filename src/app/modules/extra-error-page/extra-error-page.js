(function() {
  'use strict';

  angular.module('singApp.error')
    .controller('ErrorSearchController', ErrorSearchController)
  ;

  ErrorSearchController.$inject = ['$scope', '$state'];
  function ErrorSearchController ($scope, $state) {
    $scope.searchResult= function(){
      $state.go('app.dashboard'); // go to a page with search results
    }
  }

})();
