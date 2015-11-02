'use strict';

(function () {

	var movieService = angular.module('iceberg-movies-service-module', ['iceberg-movies-constant-module']);

	movieService.service('MoviesService', ['$http', 'MoviesReferenceURLs', function ($http, URLS, Movie) {

		var _moviesObj = {
			movies: [],
			totalItems: 0
		};

		function getMovies(pageSize, pageNumber) {

			return $http.get(URLS.MOVIES, {
				params: {
					pageSize: pageSize,
					pageNumber: pageNumber
				}
			}).then(function fetchSuccess(response) {

				_moviesObj.totalItems = response.data.totalItems;

				_moviesObj.movies = response.data.movies;

				return _moviesObj;
			});
		}

		function moviesData() {
			return _moviesObj;
		}

		return {
			getMovies: getMovies,
			moviesData: moviesData
		}
	}]);

})();