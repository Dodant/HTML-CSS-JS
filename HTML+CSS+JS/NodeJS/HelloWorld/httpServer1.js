// import http model
// var http = require('http')
// var server = http.createServer()
// server.on('request', function(req, res){
//   res.writeHead(200, {'Content-Type':'text/plain'})
//   res.write('Hello World')
//   res.end()
// })
// server.listen(8080)
// console.log('서버가 127.0.0.1:8080에서 시작되었습니다.')


var http = require('http')
var server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type':'text/plain'})
  res.end('Hello World')
}).listen(8081)
console.log('서버가 127.0.0.1:8081에서 시작되었습니다.')
