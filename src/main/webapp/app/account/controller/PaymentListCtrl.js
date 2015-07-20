(function() {
  'use strict';

  App.controller("PaymentListCtrl", ['$window', '$scope', 'ParentService',
    function($window, $scope, ParentService) {
      $scope.parentId = 1;
      $scope.parent = {};

      ParentService.get($scope.parentId).then(function(response) {
        $scope.parent = response;
      });

      $scope.cancel = function($event) {
        $window.history.back();
      };

    }
  ]);

})();
