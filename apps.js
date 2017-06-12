//APPS
var app = angular.module('testSite', ['ngRoute']);
 
app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: "HomeController",
      templateUrl: "views/home.html"
    })
	 .when('/page1', {
      controller: 'HomeController',
      templateUrl: 'views/page1.html'
    })
    .when('/page2', {
      controller: 'HomeController',
      templateUrl: 'views/page2.html'
    })
	.when('/page3', {
    controller: 'HomeController',
    templateUrl: 'views/page3.html'
    })


    .otherwise({
      redirectTo: '/'
    });
});
