class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        console.log( `${this.name} is eating`);
    }
}


class Cricketer extends Person{
    constructor(name, age,type,description){
            super(name,age);
            this.type = type;
            this.description = description;
    }

    eat(){
        super.eat(); // polymorphisom
        console.log(`${this.name} is eating very well`);
    }
}

let firoz = new Cricketer("Firoz",30,"All Rounder","Bangladeshi");
firoz.eat();

