function checkConnection() {
  return Math.round(Math.random());           //функция для случайного выбора числа
}
const ipInt = require('ip-to-int'); //подключение специального модуля 'ip-to-int'
let first = '192.168.0.0';  
let last = '192.168.1.0';
let ipBegin = ipInt(first).toInt(); //метод представляет ip как число типа integer 
let ipEnd = ipInt(last).toInt();
while (ipBegin < ipEnd) {
  ipBegin++;
  const curIp = ipInt(ipBegin).toIP(); //число integer становится ip
  if (checkConnection()) {
    console.log(`${curIp} - online`);
  } else {
    console.log(`${curIp} - offline`);
  }
}


