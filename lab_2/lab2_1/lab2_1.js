const fs = require("fs");

function lab2_1(File) {
    var text = fs.readFileSync(File, "utf8", (err) => {
            if (err) throw (err)
        }),
        text2= [],
        result = [],
        a, b;

    text2 = text.split(' ');
    if (!text2) {
        throw new err;
    }
    console.log(text);
    for (let item in text2) {
        a = item;
        b = +item +1;
        if (Number(a) < Number(text2.length) - 1) {
            if (text2[b].substr(0, 1)==text2[a].substr(-1) )
                result.push(text2[a], text2[b]);
        }
    }
    console.log('Результат:');
    for (let i = 0; i < result.length; i++) {
        console.log(result[i], result[++i]);
    }
}
try {
    lab2_1('lab2_1.txt');
} catch (err) {
    console.log('Ошибка:', err.message);
}