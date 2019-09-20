const fs = require("fs");

function lab2_1(File) {
    var text = fs.readFileSync(File, "utf8", (err) => {
            if (err) throw (err)
        }),
        arrText = [],
        arrRes = [],
        cur, next;

    arrText = text.split(' ');
    if (!arrText) {
        throw new err;

    }
    console.log(text);
    console.log('__');
    for (let item in arrText) {
        cur = item;
        next = +item + 1;
        if (Number(cur) < Number(arrText.length) - 1) {

            if (arrText[cur].substr(-1) == arrText[next].substr(0, 1))
                arrRes.push(arrText[cur], arrText[next]);
        }
    }

    console.log('Результат:');

    for (let i = 0; i < arrRes.length; i++) {
        console.log(arrRes[i], arrRes[++i]);
    }
}

try {
    lab2_1('lab2_1.txt');
} catch (err) {
    console.log('Ошибка:', err.message);
}