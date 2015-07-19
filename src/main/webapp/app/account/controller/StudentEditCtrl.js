(function() {
  'use strict';

  App.controller("StudentEditCtrl", ['$window', '$scope', '$stateParams', 'ChildService',
    function($window, $scope, $stateParams, ChildService) {
      $scope.isNew = $stateParams.studentId === 'new';
      $scope.student = {};

      function reset() {
        $scope.student = {
          firstName: '',
          lastName: '',
          stundentId: '',
          state: '',
          institution: ''
        };
      }

      if ($scope.isNew) {
        reset();
      } else if ($stateParams.studentId) {
        ChildService.get($stateParams.studentId).then(function(response) {
          $scope.student = response;
        });
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
