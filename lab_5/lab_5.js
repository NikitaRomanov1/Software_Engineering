const fs = require('fs');
const DOMParser = require('xmldom').DOMParser;


let text = fs.readFileSync("lab_5.xml", "utf8");

let parser = new DOMParser();
let xmlDom = parser.parseFromString(text,"text/xml");

const list = xmlDom.getElementsByTagName('tariff');
let result = [];

for (let index = 0; index < list.length; index++) {
    let item = list.item(index);
    let tariff = {};
    tariff.name = item.getElementsByTagName('name').item(0).textContent;
    tariff.operator_name = item.getElementsByTagName('operator_name').item(0).textContent;
    tariff.payroll = item.getElementsByTagName('payroll').item(0).textContent;
    tariff.call_prices_inside = item.getElementsByTagName('inside').item(0).textContent;
    tariff.call_prices_outside = item.getElementsByTagName('outside').item(0).textContent;
    tariff.call_prices_landline = item.getElementsByTagName('landline').item(0).textContent;
    tariff.sms_price = item.getElementsByTagName('sms_price').item(0).textContent;
    tariff.parameters_favourite_number = item.getElementsByTagName('favourite_number').item(0).textContent;
    tariff.parameters_rate = item.getElementsByTagName('rate').item(0).textContent; 
    tariff.parameters_connectionPayment = item.getElementsByTagName('connectionPayment').item(0).textContent;  
    result.push(tariff);
}
console.log(result);