var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());


var contentsOfFile = fs.readFileSync('./index.html').toString();

app.get('/', function(request, response) {
  response.send( contentsOfFile );
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
