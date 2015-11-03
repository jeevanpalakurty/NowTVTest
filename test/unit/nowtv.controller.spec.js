
describe('NowTV movies controller module', function () {

	var scope,
		mockMoviesService;

	beforeEach(module('iceberg-movies-module'));
	beforeEach(module('iceberg-movies-controller-module'));
	beforeEach(module('iceberg-movies-service-module'));

	beforeEach(module(function ($provide) {
		var data = {
			movies:[{}, {}]
		}
		mockMoviesService = {
			getMovies: jasmine.createSpy(),
			movies: jasmine.createSpy()
		}

		$provide.value('MoviesService', mockMoviesService);
	}));


	beforeEach(inject(function ($rootScope, $controller) {
		scope = $rootScope.$new();

		$controller('MoviesController',{$scope: scope});

		scope.$digest();
	}));


	it('should load initialdata when the controller is initialised', function () {
		expect(mockMoviesService.getMovies).toHaveBeenCalled();
		scope.loadInitialData();
		expect(mockMoviesService.getMovies).toHaveBeenCalled();
		scope.getMovies();
		expect(mockMoviesService.movies).toHaveBeenCalled();
	});

});