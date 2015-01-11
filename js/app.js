var contactApp = angular.module('contactApp', ['firebase', 'ngRoute']);

contactApp.config(
  function($routeProvider) {
    $routeProvider.
      when('/contacts', {
        templateUrl: 'views/contacts.html',
        controller: 'ContactListCtrl'
      }).
      when('/contacts/new', {
        templateUrl: 'views/contact-new.html',
        controller: 'ContactListCtrl'
      }).
      when('/contacts/list', {
        templateUrl: 'views/contact-list.html',
        controller: 'ContactListCtrl'
      }).
      when('/contacts/tile', {
        templateUrl: 'views/contact-panel.html',
        controller: 'ContactListCtrl'
      }).
      otherwise({
        redirectTo: '/contacts'
      });
  });
