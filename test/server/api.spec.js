var expect = require('chai').expect;
var request = require("request");
var app = require("../../server/index");

    describe("Request for Initial Load", function() {

        describe("Request for Initial Load", function() {
            
            //request for 20 items on page 1 and see if the request is successful
            var url = "http://localhost:8000/api/movies?pageNumber=1&pageSize=20";
        
            it("returns status 200", function(done) {
                request(url, function(error, response, body) {
                    expect(response.statusCode).to.equal(200);
                    done();
                });
            });
        
            it("returns the movies list of 20 items", function(done) {
                request(url, function(error, response, body) {
                    expect(JSON.parse(body).movies.length).to.equal(20);
                    done();
                });
            });
        
        });
        
        describe("Request for invalid Load", function() {
            
            //url has a missing string to see if the status is 404
            var url = "http://localhost:8000/api/movie?pageNumber=1&pageSize=20";
        
            it("returns status of 404", function(done) {
                request(url, function(error, response, body) {
                    expect(response.statusCode).to.equal(404);
                    done();
                });
            });
        
        });
        
        describe("Request for random movies Load", function() {
            
            //url for requesting the 50 items from page 5 which doesn't exist
            var url = "http://localhost:8000/api/movies?pageNumber=5&pageSize=50";
        
            
            it("returns the movies list of 0 items", function(done) {
                request(url, function(error, response, body) {
                    expect(JSON.parse(body).movies.length).to.equal(0);
                    done();
                });
            });
        
        });
        
         describe("Request for random movies Load with out parameters", function() {
            
            //requesting the default set of 20 items
            var url = "http://localhost:8000/api/movies";
        
            
            it("returns the movie list of 20 items", function(done) {
                request(url, function(error, response, body) {
                    expect(JSON.parse(body).movies.length).to.equal(20);
                    done();
                });
            });
        
        });
        
         describe("Request for random movies Load with valid page size", function() {
        
            //requesting 30 items from page 5
            var url = "http://localhost:8000/api/movies?pageNumber=5&pageSize=30";
        
            
            it("returns the movie list of 30 items", function(done) {
                request(url, function(error, response, body) {
                    expect(JSON.parse(body).movies.length).to.equal(30);
                    done();
                });
            });
        
        });
        
});