// function Person(name,age){ // parent class
//     this.name = name;
//     this.age = age;

// }


// function Cricketer(name,age,type,country){  // sub class
//     Person.call(this)
//     this.name = name;
//     this.age = age;
//     this.type = type;
//     this.country = country;
// }


// Person.prototype = {
//     eat : function(){
//         console.log(`${this.name} is eating`);
//     }
// }

// Cricketer.prototype = Object.create(Person.prototype);
// Cricketer.prototype.constructor = Cricketer;

// let sakib = new Cricketer("Sakib",36,"All rounder","Bangladeshi");
// sakib.eat();

