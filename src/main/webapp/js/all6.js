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
      });
      $urlRouterProvider.otherwise('/profile');
    }
  ]);


})();
(function() {
  'use strict';

  App.controller("ProfileCtrl", ['$scope', '$stateParams', '$state', ParentService,

    function($scope, $window, $stateParams, $state, ParentService) {
      $scope.parent = {};
      $scope.isNew = $stateParams.companyId === 'new';

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

      $scope.save = function() {
        ParentService.save($scope.parent).then(function(response) {
          console.log("Successful");
        // $state.go("companies");
        }, function(response) {
          console.log("Error");
        });
      };
    }
  ]);

})();
(function() {
  'use strict';

  class ParentService {

    constructor($http) {
      this.$http = $http;
    }

    save(parent) {
      if (parent.id) {
        return this.$http.put('parents', parent).then((response) => {
          return response.data;
        });
      } else {
        return this.$http.post('parents', parent).then((response) => {
          return response.data;
        });
      }
    }

    // get(id) {
    //   return this.$http.get('parents/companies/' + id).then((response) => {
    //     return response.data;
    //   });
    // }

    static parentServiceFactory($http) {
      return new ParentService($http);
    }
  }

  App.factory("ParentService", ['$http', ParentService.parentServiceFactory]);

})();
