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
