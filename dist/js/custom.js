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
/* Creating Angular App Controller for Items and handling some behavioral events */
angular.module('myAppCtrl', [])
	.controller('appController', ['$scope', function ($scope) {
		$scope.intro = 'Welcome to our Page';
	}])
	.controller('view1Controller', ['$scope', function ($scope) {
		$scope.title = 'View 1 Section Testing';
	}])
	.controller('view2Controller', ['$scope', function ($scope) {
		$scope.title = 'View 2 Section Testing';
	}]);