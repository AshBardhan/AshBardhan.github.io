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