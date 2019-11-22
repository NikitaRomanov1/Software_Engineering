//подключение модуля для работы с файлами
const fs = require("fs");
let fileContent ;
let tags = ['title', 'surname', 'text', 'hash'];
let parts;
let xml =`` ;
//создание абстрактного класса 
class  Converter {
        convert(fileName){
            //метод чтения файла
            this.readFile(fileName);
            //метод для конвертации файла
            this.makeConvertation();
            //метод для создания нового файла
            this.createFile();
        }
};

//класс для конвертации текстового файла в XML
class TXTtoXML extends Converter {
    //чтение файла
                readFile(fileName) {
                    fileContent = fs.readFileSync(fileName, "utf8");
                    console.log(fileContent);
                    console.log("--------------------");
                };
            //создание массива с данными файла
                makeConvertation(){
                     parts = fileContent.split(/\r?\n/);
                   for (const key in parts) {
                        xml += `<${tags[key]}>${parts[key]}</${tags[key]}>\n`
                   };
                    console.log(xml);
                };
                //создание xml файла
                createFile(){
                    fs.writeFile(`./files/newFile.xml`, xml, function(err){
                        if (err) {
                            console.log(err);
                        } else {
                            console.log("Файл успешно создан");
                        }
                    });
                };
};

const txtToXML = new TXTtoXML();

//вызов метода для обработки текстового файла
txtToXML.convert('./files/text.txt');












