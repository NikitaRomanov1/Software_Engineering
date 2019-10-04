let Connect = require('./connection.js');
let sql_request = require('./sql_request.js');

let connect = new Connect();
connect.connection1();

let sql = new sql_request();
sql.sql_checking();
