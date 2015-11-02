module.exports = function (config) {

	config.set({

		// list of files / patterns to load in the browser
		files: [
			'public/js/lib/angular.js',
			'public/js/lib/angular-mocks.js',
			'public/js/lib/**/*.js',
			'public/js/**/*.js',
			'test/unit/**/*.spec.js'
		],

		// list of files to exclude
		exclude: [
			'public/js/lib/bootstrap/**/*.js',
			'public/js/lib/jquery/**/*.js',
			'public/js/lib/lodash/**/*.js'],


		proxies: {},

		// web server port
		port: 9876,

		// enable / disable colors in the output (reporters and logs)
		colors: true,
		autoWatch: true,
		usePolling: true,

		// frameworks to use
		frameworks: ['jasmine'],
		browsers: ['Chrome'],

		customLaunchers: {
			ChromeDesktop: {
				base: 'Chrome',
				flags: ['--window-size=1280,720']
			}
		},

		plugins: [
			'karma-jasmine',
			'karma-chrome-launcher',
			'karma-mocha-reporter',
			'karma-phantomjs-launcher',
			'karma-coverage',
		],

		// Test results reporter to use
		// possible values: 'dots', 'progress', 'mocha', 'junit', 'growl', 'coverage'
		reporters: ['jasmine'],

		// If browser does not capture in given timeout [ms], kill it
		captureTimeout: 60000,

		// Continuous Integration mode
		// if true, it capture browsers, run tests and exit
		singleRun: true

	});
};



