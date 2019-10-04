'use strict';

class Connect {
connection1() {
var mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "lab3",
  password: "Nikita98"
});
// тестирование подключения
 connection.connect(function(err){
    if (err) {
      return console.error("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение к серверу MySQL успешно установлено");
    }
 });
connection.end();
}};

module.exports = Connect;
