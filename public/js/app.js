'use strict';

(function () {

	var app = angular.module('app', ['ngRoute', 'moviesController', 'angularUtils.directives.dirPagination']);


	app.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.
			when('/movielist', {
				templateUrl: 'partials/movieList.html',
				controller: 'MoviesController'
			}).
			otherwise({
				redirectTo: '/movielist'
			});
	}]);

})();
