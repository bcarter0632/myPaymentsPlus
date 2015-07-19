(function() {
  'use strict';

  App.factory('ChildService', ['$rootScope', '$http',
    function($rootScope, $http) {
      return {

        get: function(id) {
          return $http.get('students/' + id).then(function(response) {
            return response.data;
          });
        },

        save: function(parent) {
          if (parent.id) {
            return $http.put('parents', parent).then(function(response) {
              return response.data;
            });
          } else {
            return $http.post('parents', parent).then(function(response) {
              return response.data;
            });
          }
        }
      };
    }
  ]);
})();
