const  personMethod = {
    eat(){
        console.log('person is eating');
    },
    sleep(){
        console.log('person is sleeping');
    }
}

function Person(name,age){

    let person = Object.create(personMethod);

    person.name = name;
    person.age = age;

  
return person;

}

const sakib = Person('Sakib',35);
sakib.eat();
const tamim = Person('Tamim',36);