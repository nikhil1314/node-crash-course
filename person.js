
console.log(__filename,__dirname);
class person {
    constructor(name,age) {
        this.name=name;
        this.age=age;

    }
    greeting(){
        console.log(`my name is ${this.name} and my age is ${this.age}`);
    }

    }

module.exports=person;