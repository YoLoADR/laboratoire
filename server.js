var express = require('express');
var app = express(); 
app.use('/js', express.static(__dirname + '/app/js'));
app.use('/lib', express.static(__dirname + '/app/lib'));
app.use('/css', express.static(__dirname + '/app/css'));
app.get('/', function (req, res) {
res.sendfile(__dirname + '/app/index.html');
});
app.listen(8082);