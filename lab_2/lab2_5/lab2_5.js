var fs = require('fs');

function lab2_5(file) {
    var i = 0;
    var kol = 0;
    let filetext = fs.readFileSync(file, 'utf8', (err) => {
        if (err) throw (err);
    });
    let text = [];
    text = filetext.split(' ');
    for (item in text) {
        if (isFinite(text[item])) {
            i++;
        } else if (!isFinite(text[item])+1) {
        kol = i;
        i = 0;
            text[item] = text[item + 1];
        } 
        
    }
    console.log('Наибольшее число цифр идущих подряд:', kol);
}

try {
    lab2_5('lab2_5.txt');
} catch (err) {
    console.log('Ошибка! нет такого файла', err.message); 
}