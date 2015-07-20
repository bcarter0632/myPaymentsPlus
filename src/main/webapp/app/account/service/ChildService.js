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

        save: function(parentId, child) {
          if (child.id) {
            return $http.put('students/' + parentId, child).then(function(response) {
              return response.data;
            });
          } else {
            return $http.post('students/' + parentId, child).then(function(response) {
              return response.data;
            });
          }
        }
      };
    }
  ]);
})();
