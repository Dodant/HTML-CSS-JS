var http = require('http');
var fs = require('fs');
http.createServer(function(req, res) {
    fs.readFile('index.html', function(err, data) {
        res.writeHeader(200, {'Content-Type':'text/html'});
        res.end(data);
    });
}).listen(8082);
console.log('서버가 127.0.0.1:8082에서 시작되었습니다.');
