// class sql_request {
//     sql_checking() {
//     var mysql = require("mysql2");
//     const connection = mysql.createConnection({
//         host: "localhost",
//         user: "root",
//         database: "lab3",
//         password: "Nikita98"
//       });
//     connection.query("SELECT * FROM teachers",
//     function(err, results, fields) {
//       console.log(err);
//       console.log(results);
//   });
//   connection.end();
// }
// };

// module.exports = sql_request;