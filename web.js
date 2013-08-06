var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

var contentsOfFile = new Buffer(256);

fs.readFile('./index.html', 'ascii', function(err, contentsOfFile) {
  if (err) throw err;
//  console.log(contentsOfFile.toString('ascii', 0, 100));
});

app.get('/', function(request, response) {
  response.send('test \n');
  response.send(contentsOfFile.toString('ascii'));
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
