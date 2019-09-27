var app = require('express')();
var http = require('http').createServer(app);
var poems = require('./poems.js');

app.get('/', function(req, res){
    let i = Math.floor((0 + Math.random() * (4)));
    console.log(i);
  res.send(poems[i]);
  console.log(poems[i]);
});
http.listen(3000, function(){
    console.log('Все работает! Порт:3000');
  });