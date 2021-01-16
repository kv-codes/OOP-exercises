class Person {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    greet(otherPerson) {
      console.log('Hello ' + otherPerson.name + ', I am ' + this.name + '!');
    }
  }
//Instantiates an instance object of Person for 2 ppl with email and num
  let Sonny = new Person('Sonny', 'sonny@hotmail.com', '483-485-4948' );
  let Jordan = new Person('Jordan', 'jordan@aol.com', '495-586-3456');

//greet method to greet
  Sonny.greet(Jordan);
  Jordan.greet(Sonny);

//prints contact number for Sonny and Jordan
console.log(`${Sonny.email}`, `${Sonny.phone}`);
console.log(`${Jordan.email}`,`${Jordan.phone}` );  

