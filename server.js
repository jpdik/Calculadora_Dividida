var express = require('express');
var nunjucks = require('nunjucks');
var app = express();
var fs = require("fs");
var path = __dirname + "/";

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.use(express.static(__dirname + '/public'))
app.get('/', function (req, res) {
    res.render('index.html');
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Servidor escutando em: http://%s:%s", host, port)

})