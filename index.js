var http = require('http');
var path = require('path');
var server = http.createServer();


var url = require('url');
var urlpath = path.join(__dirname, urlpath);
server.listen(4000, function(){

	console.log("server started at 4000")
})


