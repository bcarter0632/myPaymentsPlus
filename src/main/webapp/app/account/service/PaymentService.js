(function() {
  'use strict';

  App.factory('PaymentService', ['$rootScope', '$http',
    function($rootScope, $http) {
      return {

        get: function(id) {
          return $http.get('payments/' + id).then(function(response) {
            return response.data;
          });
        },

        save: function(parentId, payment) {
          if (payment.id) {
            return $http.put('payments/' + parentId, payment).then(function(response) {
              return response.data;
            });
          } else {
            return $http.post('payments/' + parentId, payment).then(function(response) {
              return response.data;
            });
          }
        }
      };
    }
  ]);
})();
