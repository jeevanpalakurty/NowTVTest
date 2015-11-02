'use strict';

(function () {
	var movieControllers = angular.module('moviesController', ['moviesService']);

	movieControllers.controller('MoviesController', ['$scope', 'MoviesService', '$timeout', function ($scope, MoviesService, $timeout) {

		$scope.currentPage = 1;
		$scope.pageSize = 20;
		$scope.filterText = '';

		// Instantiate these variables outside the watch
		var tempFilterText = '',
			filterTextTimeout;

		$scope.loadInitialData = function loadInitialData() {
			MoviesService.getMovies($scope.pageSize, $scope.currentPage);
		};

		$scope.getMovies = function getMovies() {
			return MoviesService.movies();
		}

		$scope.pageChangeHandler = function (num) {
			MoviesService.getMovies($scope.pageSize, num);
		};
		$scope.loadInitialData();

		$scope.$watch('searchText.title', function (val) {
			///if (filterTextTimeout) $timeout.cancel(filterTextTimeout);

			if(val && val.length >= 3) {
				$scope.filterText = val;
			}
			else if(val === '') {
				$scope.filterText = '';
			}
			//tempFilterText = val;
			//filterTextTimeout = $timeout(function () {
			//	$scope.filterText = tempFilterText;
			//}, 350);
		})

	}]);

})();