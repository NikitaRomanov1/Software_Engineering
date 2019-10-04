class sql_request {
    sql_checking() {
    var mysql = require("mysql2");
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "lab3",
        password: "Nikita98"
      });
const request1 = ['Среда','505']
      const sql = "select teachers.teacherName from lab3.timetable left join teachers on timetable.TeacherID = teachers.TeacherID  where timetable.Day = (?) and timetable.Class = (?) ;";

connection.query(sql, request1, function(err, results) {
      console.log(err);
      console.log(results);
  });
  connection.end();
}
};

module.exports = sql_request;