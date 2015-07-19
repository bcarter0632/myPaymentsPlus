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
