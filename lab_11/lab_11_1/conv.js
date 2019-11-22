//Подключение библиотек
const fs = require('fs');
const convert = require('xml-js');
//Абстрактный класс
class Сonvector{
    //Занесение данных и вызов метода считывания
    constructor(){
        this.data = this.readFile()
    }
    /**
     * Метод считывания текстового файла
     * Создание объекта для конверктации
     */
    readFile(){
        let article = {};
        let text = fs.readFileSync("text.txt", "utf8");
    
        let parts = text.split(/\r?\n/);
        parts = parts.filter(el => el != '');
        
        article.title  = parts[0];
        article.author = parts[1];
        article.text   = parts[2];
        article.hash   = parts[3];
        console.log(article);
        return article;
    }
};

//Конкретный класс 
class Obj2XML extends Сonvector{
    //Конверктация из объекта в XML
    conv(){
        let options = {compact: true, ignoreComment: true, spaces: 4};
        let result = convert.js2xml(this.data, options);

        return result;
    }

    //Создание XML файла
    createXML(){
        let result = this.conv();
        fs.writeFile(`./articles/${this.data.title}.xml`, result, function(err){
            if (err) {
                console.log(err);
            } else {
                console.log("Файл создан");
            }
        });
    }
};

/**
* Клиентский код вызывает шаблонный метод для выполнения алгоритма. Клиентский
* код не должен знать конкретный класс объекта, с которым работает, при
* условии, что он работает с объектами через интерфейс их базового класса.
*/
let callTemplate = (abstractClass)=>{
    abstractClass.createXML();
}

callTemplate(new Obj2XML());

