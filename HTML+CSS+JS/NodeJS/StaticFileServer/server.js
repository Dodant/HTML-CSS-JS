var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');

function sendError(response) {
  response.writeHeader(404, {'Content-Type':'text/plain'});
  response.write('Error 404: File Not Found');
  response.end();
}

function sendFile(response, filePath, fileContent) {
  console.log('Sending File: ' + filePath);
  response.writeHeader(
    200,
    {'Content-Type': mime.lookup(path.basename(filePath))}
  );
  console.log('Content-Type: ' +  mime.lookup(path.basename(filePath)));
  response.write(fileContent);
  response.end();
}

function serverStatic(response, absPath) {
  fs.exists(absPath, function (exists) {
    if(exists) {
      fs.readFile(absPath, function(err, data) {
        if(err) {
          sendError(response);
        }
        else {
          sendFile(response, absPath, data);
        }
      });
    }
    else {
      sendError(response);
    }
  });
}

var server = http.createServer(function(request, response) {
  console.log("Sever serving: " + request.url);
  var filePath = null;
  if(request.url == '/') {
    filePath = '/index.html'
  }
  else {
    filePath = request.url;
  }
  var absPath = '.' + filePath;
  serverStatic(response, absPath);
});

server.listen(8085, function () {
  console.log('Static File Server started at port 8080...');
})
