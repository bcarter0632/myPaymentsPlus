(function() {
  'use strict';

  App.controller("ProfileCtrl", ['$window', '$scope', 'ParentService',
    function($window, $scope, ParentService) {
      $scope.id = 1;
      $scope.parent = {};

      ParentService.get($scope.id).then(function(response) {
        $scope.parent = response;
      });

      function reset() {
        $scope.parent = {
          firstName: '',
          lastName: '',
          username: '',
          password: '',
          email: '',
          children: [],
          creditCards: []
        };
      }

      $scope.cancel = function($event) {
        $window.history.back();
      };

      $scope.save = function() {
        ParentService.save($scope.parent).then(function(response) {
          $window.history.back();
        }, function(response) {
          $scope.error = response.data;
        });
      };

    }
  ]);

})();
