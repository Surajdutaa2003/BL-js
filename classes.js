class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, I'm ${this.name}`);
    }
}

const person = new Person("John", 30);
person.greet(); // Hello, I'm John
