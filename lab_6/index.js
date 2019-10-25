'use strict';

const fs = require('fs');
const serialize = require('serialize-javascript');

//берём данные из json
let data = fs.readFileSync("lab_6_1.json", "utf8");
data = JSON.parse(data);


    const subjects = data.subjects.subject;
    const teachers = data.teachers.teacher;

//pojo предметы 
class Subjects{
    constructor(option){
        this.name = option.name
        this.time = option.time
        this.class = option.class
    }
    getName(){
        return this.name
    }
    setName(sub){
        this.name = sub;
        return this;
    }

    getTime(){
        return this.time
    }
    setTime(day){
        this.time = day;
        return this;
    }

    getClass(){
        return this.class
    }
    setClass(cabin){
        this.class = cabin;
        return this.class
    }
};

//pojo учителя
class Teachers{
    constructor(option){
        this.name = option.name
        this.subjects = option.subjects
        this.subjects.subject = option.subjects.subject
        this.amount_subjects = option.amount_subjects
        this.amount_students = option.amount_students
    }
    getName(){
        return this.name
    }
    setName(NameSurname){
        this.name = NameSurname;
        return this;
    }
    getSubjects(){
        return this.subjects.subject
    }
    getSubject(num){
        return this.subjects.subject[num]
    }

    getAmountSub(){
        return this.amount_subjects
    }
    setAmountSub(AmSub){
        this.amount_subjects = AmSub;
        return this;
    }

    getAmountStud(){
        return this.amount_subjects
    }
    setAmountStud(AmStud){
        this.amount_subjects = AmStud;
        return this;
    }
};

            let text = `ФИО:${new Teachers(teachers[2]).getName()}\nВедёт: ${new Teachers(teachers[2]).getSubjects()}`;
    console.log(`${text} \n \n`);
    console.log('Вывод элемента:');

    console.log(new Teachers(teachers[2]));
    console.log('Сериализация:');

let serializeObj = serialize(new Teachers(teachers[2]), {isJSON: true});
    console.log(serializeObj + '\n');

    console.log('Десериализация:');
    console.log (eval(`( ${serializeObj})`));
