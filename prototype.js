

function Person(name,age){

    let person = Object.create(Person.prototype);

    person.name = name;
    person.age = age;

  
return person;

}

Person.prototype = {
    eat(){
        console.log('person is eating');
    },
    sleep(){
        console.log('person is sleeping');
    }
}

const sakib = Person('Sakib',35);
sakib.eat();
const tamim = Person('Tamim',36);


