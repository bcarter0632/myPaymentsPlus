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
          studentId: '',
          state: '',
          institution: '',
          balance: 0
        };
      }

      if ($scope.isNew) {
        reset();
      } else if ($stateParams.studentId) {
        ChildService.get($stateParams.studentId).then(function(response) {
          $scope.student = response;
        });
      }


      $scope.cancelEdit = function($event) {
        $window.history.back();
      };

      $scope.save = function() {
        var parentId = 1;
        ChildService.save(parentId, $scope.student).then(function(response) {
          $window.history.back();
        }, function(response) {
          $scope.error = response.data;
        });
      };

      $scope.addToBalance = function(amount) {
        var parentId = 1;
        var currentBalance = $scope.student.balance;
        var newBalance = currentBalance + amount;
        $scope.student.balance = newBalance;
        ChildService.save(parentId, $scope.student).then(function(response) {
          $window.alert("Payment $" + amount + " was added successfully;");
          $window.history.back();
        }, function(response) {
          $scope.error = response.data;
        });
      };

    }
  ]);

})();
