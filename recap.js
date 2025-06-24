const product = [
    { id: 1, name: 'lenovo', price: 5800 },
    { id: 2, name: 'dell', price: 50000 },
    { id: 3, name: 'lPhone', price: 7000 },
    { id: 4, name: 'vivo', price: 6000 },

];


const total = product.reduce((prev, curr) => prev + curr.price, 0);
console.log(total);

//map 

// const names = product.map(products => products.name);
// console.log(names);

//forEach 

// product.forEach(p => console.log(p.id));

// function product(p) {
//     console.log(p);

// }

// const expensive = product.filter(p => p.price > 5000);
// console.log(expensive);


//find 

// const affordable = product.find(p => p.price < 50000);
// console.log(affordable);

//reduce

const numbers = [2, 4, 5, 8, 9];
// const total = numbers.reduce((prev, curr) => prev + curr, 0)
// console.log(total);


// mathod
class Product {
    country = 'Bangladesh';

    constructor(name , age) {
        this.name = name;
        this.age = age;
    }

    speak(talk) {
        console.log(`saradin pok pk pok kori  ${talk}`);

    }

}
const lenovo = new Product('mari', 23);
console.log(lenovo);
lenovo.speak('kanno kori')