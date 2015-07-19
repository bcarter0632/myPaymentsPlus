/*jshint unused: false */
/*global angular:true */
// Declare app level module
var App = angular.module('App', ['ngAnimate', 'ngRoute', 'ui.router', 'mgcrea.ngStrap', 'ngSanitize']);
(function() {
  'use strict';

  App.value('redirectToUrlAfterLogin', {
    url: '/dashboard'
  });

  App.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$provide',

    function($stateProvider, $urlRouterProvider, $httpProvider, $provide) {
      $stateProvider.state('profile', {
        url: '/profile',
        templateUrl: 'app/account/view/profileEdit.html',
        controller: 'ProfileCtrl'
      }).state('students', {
        url: '/students',
        templateUrl: 'app/account/view/students.html',
        controller: 'StudentListCtrl'
      }).state('studentEdit', {
        url: '/student/{studentId}',
        templateUrl: 'app/account/view/studentEdit.html',
        controller: 'StudentEditCtrl'
      });
      $urlRouterProvider.otherwise('/profile');
    }
  ]);


})();
(function() {
  'use strict';

  App.controller("ProfileCtrl", ['$window', '$scope', 'ParentService',
    function($window, $scope, ParentService) {
      $scope.id = 1;
      $scope.parent = {};

      ParentService.get($scope.id).then(function(response) {
        $scope.parent = response;
      });

      // DllService.get($stateParams.dllId).then(function(response) {
      //   $scope.dll = response;
      //   $scope.dllInUse = [];
      //   $scope.setDisableDelete($scope.dll);
      // });

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
(function() {
  'use strict';

  App.controller("StudentListCtrl", ['$window', '$scope', 'ParentService',
    function($window, $scope, ParentService) {
      $scope.parentId = 1;
      $scope.parent = {};
      $scope.students = [];

      ParentService.get($scope.parentId).then(function(response) {
        $scope.parent = response;
        console.log($scope.parent);
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
(function() {
  'use strict';

  App.factory('ParentService', ['$rootScope', '$http',
    function($rootScope, $http) {
      return {

        get: function(id) {
          return $http.get('parents/' + id).then(function(response) {
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
