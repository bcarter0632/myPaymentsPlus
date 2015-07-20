(function() {
  'use strict';

  App.controller("PaymentEditCtrl", ['$window', '$scope', '$stateParams', 'PaymentService',
    function($window, $scope, $stateParams, PaymentService) {
      $scope.isNew = $stateParams.cardId === 'new';
      $scope.creditCard = {};

      function reset() {
        $scope.creditCard = {
          name: '',
          cardNumber: '',
          ccv: '',
          expiration: ''
        };
      }

      if ($scope.isNew) {
        reset();
      } else if ($stateParams.cardId) {
        PaymentService.get($stateParams.cardId).then(function(response) {
          $scope.creditCard = response;
        });
      }


      $scope.cancelEdit = function($event) {
        $window.history.back();
      };

      $scope.save = function() {
        var parentId = 1;
        PaymentService.save(parentId, $scope.creditCard).then(function(response) {
          $window.history.back();
        }, function(response) {
          $scope.error = response.data;
        });
      };

    }
  ]);

})();
