(function() {
  'use strict';

  App.controller("StudentListCtrl", ['$window', '$scope', 'ParentService',
    function($window, $scope, ParentService) {
      $scope.parentId = 1;
      $scope.parent = {};
      $scope.students = [];

      ParentService.get($scope.parentId).then(function(response) {
        $scope.parent = response;
      });

      function reset() {
        $scope.student = {
          firstName: '',
          lastName: '',
          stundentId: '',
          state: '',
          institution: ''
        };
      }

      $scope.cancel = function($event) {
        $window.history.back();
      };

      $scope.save = function() {
        ParentService.save($scope.student).then(function(response) {
          $window.history.back();
        }, function(response) {
          $scope.error = response.data;
        });
      };

    }
  ]);

})();
