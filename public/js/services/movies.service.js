'use strict';

(function () {

	var movieService = angular.module('moviesService', []);

	movieService.service('MoviesService', ['$http', 'MoviesReferenceURLs', function ($http, URLS, Movie) {

		var _movies = {
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

				_movies.totalItems = response.data.totalItems;

				_movies.movies = response.data.movies;

				return _movies;
			});
		}

		function movies() {
			return _movies;
		}

		return {
			getMovies: getMovies,
			movies: movies
		}
	}]);

})();