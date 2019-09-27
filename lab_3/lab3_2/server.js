var server = require('express')(); //фреймворк для приложений на node.js
var http = require('http').createServer(server); //подключение модуля http и создание сервера
var io = require('socket.io')(http); //js-библиотека для обмена данными в реальном времени

server.get('/', function (req, res) {  //обработка get-запроса http протокола
  res.sendFile(__dirname + '/index.html'); // функция для отправки html файла
});
io.on('connection', function (socket) {  //проверка на подключение клиента с помощью библотеки socket.io
  console.log('a user connected');
  socket.on('disconnect', function () {
    console.log('user disconnected');
  });
});
io.on('connection', function (socket) { //получение события 'сообщение' 
  socket.on('message', function (msg) {
    console.log('message: ' + msg);  //вывод полученого сообщения в консоль
  });
});

http.listen(3000, function () {    // подключение сервера к указанному порту
  console.log('Всё работает! Порт:3000');
});
