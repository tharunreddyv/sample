var http = require('http');

http.createServer(function (req, res) {
 res.writeHead(200, {'Content-Type': 'text/html'});
 res.end('welcome to nodejs ci-cd Jenkin');
}).listen(8090); 
