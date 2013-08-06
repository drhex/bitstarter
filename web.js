var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

var contentsOfFile = new Buffer(256);


fs.readFileSync('./index.html', 'ascii' function(err, contentsOfFile) {
  if (err) throw err;
//  console.log(contentsOfFile);
});



app.get('/', function(request, response) {
  response.send('test 1 \n' + contentsOfFile + '\n test 2 \n' + contentsOfFile.toString('ascii') + '\n test 3 \n' + contentsOfFile.toString("utf-8") );
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
