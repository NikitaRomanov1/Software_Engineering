const readline = require('readline'); //подключение модуля node.js -readline
const rl = readline.createInterface({ //установка интерфейса
    input: process.stdin, //ввод данных
    output: process.stdout //вывод данных
});
let exercise1_3 = {  //создание объекта
    password : "qwerty",
}
exercise1_3.checking = function() {  //объявление метода
rl.question('Enter the password: ', (answer) => {
    if (answer != this.password) { //проверка ввода пароля
        console.log(`Wrong password: ${answer}`);
        rl.close();
    } else {
        console.log(`Correct!`)
        rl.close();
    }
}); 
}
exercise1_3.checking(); //вызов метода