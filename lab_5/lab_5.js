var fs = require('fs');
var DOMParser = require('xmldom').DOMParser;


let text = fs.readFileSync("lab_5.xml", "utf8");

var parser = new DOMParser();
var xmlDom = parser.parseFromString(text,"text/xml");

for (let index = 0; index < xmlDom.getElementsByTagName('name').length; index++) {
    var name = xmlDom.getElementsByTagName('name')[index].childNodes[0].nodeValue;
    console.log(name);
};
