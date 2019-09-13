const readline = require('readline'); //подключение модуля node.js -readline
const rl = readline.createInterface({ //установка интерфейса
    input: process.stdin, //ввод данных
    output: process.stdout //вывод данных
});
rl.question('Enter the string of numbers witn , ', (answer) => {
    let numb = answer.split(',').map(parseFloat);
    console.log(numb);
    let sum = 0;
    let mult = 1;
    for (key in numb) {
        sum =  sum + numb[key];
         mult = mult * numb[key]; 
}
console.log(`Sum= ${sum}`);
console.log(`Multiplication= ${mult}`);
rl.close();
});




