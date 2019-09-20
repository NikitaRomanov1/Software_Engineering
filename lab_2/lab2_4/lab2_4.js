var fs = require('fs'); // модуль fs для работы с файлами

function findWord(file) { //создание функции
    let filetext = fs.readFileSync(file, 'utf8', (err) => {
        if (err) throw (err);
    });
    let text = [];
    text = filetext.split(' ');
    var string = "Nikita";
    fs.writeFileSync('writeFile', text.filter(s => s.indexOf(string) === 0)); 
}
    try {
        findWord('lab2_4.txt');
    } catch (err) {
        console.log('Ошибка! нет такого файла', err.message);
    }


