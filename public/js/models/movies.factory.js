'use strict';

(function () {

   angular.module('iceberg-movies-factory-module',[]).factory('MoviesFactory', [ function () {
      return function MoviesFactory(raw) {
         var _title = 0,
            _directors = [],
            _actors = [],
            _duration = null,
            _rating = null,
            _year = null;

         if (raw) {
            _title = raw.title ? raw.title : null;
            _directors = raw.directors && raw.directors.list ? raw.directors.list : null;;
            _actors = raw.actors && raw.actors.list ? raw.actors.list : null;
            _duration = raw.duration ? raw.duration : null;
            _rating  = raw.rating ? raw.rating : null;
            _year = raw.year ?  raw.year : null;
         }

         _.extend(this, {

            title: function titleAccessor() {
               return _title;
            },
            directors: function directorsAccessor() {
               return _directors;
            },
            actors: function actorsAccessor() {
               return _actors;
            },
            duration: function durationAccessor() {
               return _duration;
            },
            rating: function ratingAccessor() {
               return _rating;
            },
            year: function yearAccessor() {
               return _year;
            },
            toJSON: function toJSON() {
               return {

               }
            }
         });
      }

   }]);
})();