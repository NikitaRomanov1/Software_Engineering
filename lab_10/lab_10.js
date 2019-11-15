//чтение из файла
const fs = require("fs");
let code = fs.readFileSync("lab_10.txt", "utf8");

//создание класса компилятор
class Compilator {
    constructor (){
this.op = Symbol('op');
this.num  = Symbol('num');
    }
    //лексер разбивает код на лексемы
 lex(code) {
 return code.split(' ').map(s => s.trim()).filter(s => s.length);
}
//строит абстрактное синтаксическое дерево
 parse(tokens)  {

  let c = 0;
  const peek = () => tokens[c];
  const consume = () => tokens[c++];

  const parseNum = () => ({ val: parseInt(consume()), type: this.num });

  const parseOp = () => {
    const node = { val: consume(), type: this.op, expr: [] };
    while (peek()) node.expr.push(parseExpr());
    return node;
  };

  const parseExpr = () => /\d/.test(peek()) ? parseNum() : parseOp();
  return parseExpr();
};

// перебор дерева и вычисления
evaluate(ast)  {
  const opAcMap = {
    sum: args => args.reduce((a, b) => a + b, 0),
    sub: args => args.reduce((a, b) => a - b),
    div: args => args.reduce((a, b) => a / b),
    mul: args => args.reduce((a, b) => a * b, 1)
  };

  if (ast.type === this.num) return ast.val;
  return opAcMap[ast.val](ast.expr.map(this.evaluate));
};


compile(ast)  {
  const opMap = { sum: '+', mul: '*', sub: '-', div: '/' };
  const compileNum = ast => ast.val;
  const compileOp = ast => `(${ast.expr.map(compile).join(' ' + opMap[ast.val] + ' ')})`;
  const compile = ast => ast.type === this.num ? compileNum(ast) : compileOp(ast);
  return compile(ast);
};

}

let comp = new Compilator;

let tokens = comp.lex(code);
console.log(tokens);

let ast = comp.parse(tokens);
console.log(ast);

let result = comp.evaluate(ast);
console.log(result);

let compilation = comp.compile(ast);
console.log(compilation);