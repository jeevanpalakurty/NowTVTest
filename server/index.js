var jsonfile = require('jsonfile');

var path = require('path');

var express = require('express');

var app = express();

app.use(express.static(__dirname + '/../public'));

app.listen(8000, function(){
   console.log('App started on port 8000!');
});


app.get('/api/movies', function(req, res) {
   var file = path.normalize(__dirname + '/data.json');
   console.log('path: ' + file);
   var defaultPageSize = 20,
      totalItems = 0,
      result;

   jsonfile.readFile(file, function(err, obj) {
      result = [];  
      if(err) {
         res.json({status: 'error', reason: err.toString()});
         return;
      }
      totalItems = obj.movies.length;
      var movies = obj.movies.splice((((req.query.pageNumber && req.query.pageNumber !== 1) ? req.query.pageNumber-1 : req.query.pageNumber)*req.query.pageSize), req.query.pageSize ? req.query.pageSize : defaultPageSize);
      result = {movies: movies, totalItems: totalItems};
      res.send(result);
   });
});
