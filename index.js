var http = require('http');
var path = require('path');
var server = http.createServer();



var express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

var query = urlquery;
console.log(query);
var url = require('url');
var urlpath = path.join(__dirname, urlpath);
server.listen(4000, function(){

	console.log("server started at 4000")
})