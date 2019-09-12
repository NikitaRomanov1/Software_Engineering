
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the password: ', (answer) => {
  if (answer != "qwerty") {
  console.log(`Wrong password: ${answer}`);
  rl.close(); } else {console.log(`Correct!`)
  rl.close();}
});