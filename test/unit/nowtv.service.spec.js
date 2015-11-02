describe('http', function () {

	beforeEach(module('app'));
	beforeEach(module('moviesService'));

	var moviesService;
	var $httpBackend;

	beforeEach(inject(function (_MoviesService_, _$httpBackend_) {
		moviesService = _MoviesService_;
		$httpBackend = _$httpBackend_;
	}));

	describe('when sending a message', function () {
		beforeEach(function () {
			$httpBackend.expectGET('/api/movies')
				.respond(200, {message: 'Ok.', id: 0});
			moviesService.getMovies();
			$httpBackend.flush();
		});

		it('should send an HTTP GET request', function () {
			$httpBackend.verifyNoOutstandingExpectation();
			$httpBackend.verifyNoOutstandingRequest();
		});
	});
});