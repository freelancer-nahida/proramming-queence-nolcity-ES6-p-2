// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     sleep() {
//         console.log(`Sleeping now ${this.name}`);

//     }
// }

// const kodom = new Person('kodom Ali', 26)

// console.log(kodom);
// kodom.sleep();
// const badam = new Person('badam Ali', 26)
// console.log(badam);

const Person = {
    name: 'kodom Ali',
    job: 'sleeping'
}
// console.log(Person.job);
console.log(Person['job']);

