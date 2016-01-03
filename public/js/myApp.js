var app = angular.module('myApp', ['myAppCtrl', 'ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/',
			name: 'home',
			templateUrl: 'partials/sample-1.html',
			controller: 'view1Controller'
		})
		.state('view1', {
			url: '/view1',
			name: 'view1',
			templateUrl: 'partials/sample-1.html',
			controller: 'view1Controller'
		})
		.state('view2', {
			url: '/view2',
			name: 'view2',
			templateUrl: 'partials/sample-2.html',
			controller: 'view2Controller'
		});
	$urlRouterProvider.otherwise('/');
}]);