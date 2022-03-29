

function Person(name,age){

    // let person = Object.create(Person.prototype);  //every function has prototype property

    this.name = name;
    this.age = age;

  
// return person;

}

Person.prototype = {
    eat(){
        console.log('person is eating');
    },
    sleep(){
        console.log('person is sleeping');
    }
}

const sakib =new Person('Sakib',35); // new keyword added and create new object 
sakib.eat();
const tamim = new Person('Tamim',36);


