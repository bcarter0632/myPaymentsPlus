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
      }).state('creditCards', {
        url: '/creditCards',
        templateUrl: 'app/account/view/creditCards.html',
        controller: 'PaymentListCtrl'
      }).state('creditCardEdit', {
        url: '/creditCard/{cardId}',
        templateUrl: 'app/account/view/creditCardEdit.html',
        controller: 'PaymentEditCtrl'
      });
      $urlRouterProvider.otherwise('/profile');
    }
  ]);


})();
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
(function() {
  'use strict';

  App.controller("PaymentListCtrl", ['$window', '$scope', 'ParentService',
    function($window, $scope, ParentService) {
      $scope.parentId = 1;
      $scope.parent = {};

      ParentService.get($scope.parentId).then(function(response) {
        $scope.parent = response;
      });

      $scope.cancel = function($event) {
        $window.history.back();
      };

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
(function() {
  'use strict';

  App.controller("StudentListCtrl", ['$window', '$scope', 'ParentService',
    function($window, $scope, ParentService) {
      $scope.parentId = 1;
      $scope.parent = {};

      ParentService.get($scope.parentId).then(function(response) {
        $scope.parent = response;
      });

      $scope.cancel = function($event) {
        $window.history.back();
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
