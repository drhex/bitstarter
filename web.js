var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

var contentsOfFile = new Buffer(256);

fs.readFile('./index.html', String, function(err, contentsOfFile) {
  if (err) throw err;
//  console.log(contentsOfFile.toString());
});

app.get('/', function(request, response) {
  response.send(contentsOfFile.toString());
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
