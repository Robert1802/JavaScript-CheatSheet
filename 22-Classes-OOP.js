// Object Oriented Programming

// 1 - Class Declaration

class Person {
    constructor(name, age){
        // This is a public Property
        this.name = name;
        this.age = age;
    }

    // This is a public Method
    getAge(){
        return this.age;
    }
}

// 2 - Class Expression

const Person2 = class {
    // Constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method
    getAge2(){
        return this.age;
    }
}

// 3 - Inheritance
/*
    Inheritance is a way to create a new class based on an existing class
    The new class is called subclass or derived class
    The existing class is called superclass or base class
    The subclass inherits all the properties and methods from superclass
    The subclass can add new properties and methods
    The subclass can override existing properties and methods
    It is recomended to use dependency injection insetead of inheritance
*/

class Student extends Person {
    constructor(name, age, school){
        // This is a shortcut to call the parent constructor
        // super()
        // this.age = age;
        // this.name = name;
        super(name, age);
        this.school = school;
    }

    getSchool(){
        return this.school = school;
    }

    getAgeChild(){
        // You can call a parent method inside a child method using super
        return super.getAge;
    }
}

const student = new Student('Robert', 29, 'My school')

// 4 - Encapsulation
/*
    Encapsulation is a way to hide the implementation details of a class
    The class exposes only the necessary properties and methods
    The class hides the unecessary properties and methods
    The class hides the properties and methods that should not be accessed from outside
*/

class EncapsulatedPerson {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    // Private mathod
    #getName() {
        return this.name;
    }
    getAge(){
        return this.age;
    }
}

const encapsulatedPerson = new EncapsulatedPerson('Robert', 29);

// 5 - Abstraction
/*
    Abstraction is a way to hide the implementation details of a class
    The class exposes only the necessary properties and methods
    The class hides the unnecessary properties and methods
    The class hides the properties and methods that should not be accessed from outside
*/

// Create an Abstract Class
class AbstractPerson {
    constructor(name, age){
        this.name = name;
        this.age = age;
        if (new.target === AbstractPerson) {
            throw new Error('Abstract class "AbstractPerson" cannot be instantiated directly');
        }
    }

    getAge(){
        throw new Error('You need to implement the getAge method');
    }
}

// Create a class that extends the Abstract Class
class PersonThatWillInherit extends AbstractPerson {
    constructor(name, age){
        super(name,age);
    }
    getAge(){
        return this.age;
    }
}

const person4 = new PersonThatWillInherit ('Robert', 29);
alert(person4.getAge());

// 6 - Dependency Injection
/* 
    Dependency Injection is a way to create a new class based on an existing class
    The new class is called a subclass or derived class
*/

class PersonDI {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getAge(){
        return this.name;
    }
}

class StudentDI {
    constructor(person) {
        this.person = person;
    }
    getAge(){
        return this.person.getAge();
    }
}

const personDI = new PersonDI('Robert', 29);
const studentDI = new StudentDI(personDI);

// 7 - Singleton
// Singleton is a class that can have only one instance

class Singleton {
    constructor(name, age){
        if (Singleton.instance) {
            return Singleton.instance;
        }
        Singleton.instance = this;
        this.name = name;
        this.age = age;
    }
}