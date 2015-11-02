'use strict';

(function () {

	var icebergMovies= angular.module('iceberg-movies-module', ['ngRoute', 'iceberg-movies-controller-module', 'angularUtils.directives.dirPagination']);


	icebergMovies.config(['$routeProvider', function ($routeProvider) {
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
