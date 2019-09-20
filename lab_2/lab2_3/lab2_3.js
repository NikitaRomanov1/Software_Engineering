const fs = require("fs");

let transMatr = (fileName) => {
    const matrix = [];
    const matr = fs.readFileSync(fileName, "utf8", (err) => {
        if (err) throw (err);
    });
    let rows = matr.split(/\r?\n/);

    for (const row in rows) {
        matrix[row] = rows[row].split(/ +/);
    }
    console.log('Исходная матрица');
    console.log(matr);
    console.log('__');
    console.log('Массив');
    console.log(matrix);
};


try {
    transMatr('matr.txt')
} catch (error) {
    console.log('Ошибка:', error.message);
}