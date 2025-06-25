// const numbe = [2, 6, 56, 78];

// const total = numbe.reduce((p, c) => p + c, 0);

// console.log(total);

// const numbers = [20, 56, 89, 78, 98];

// const sub = numbers.reduce((maria, beli) => maria * beli, 1);

// console.log(sub);

const products = [
    { id: 1, name: 'lenovo', price: 51000 },
    { id: 2, name: 'dell', price: 41000 },
    { id: 3, name: 'hp', price: 81000 },
    { id: 4, name: 'mac', price: 61000 }
];



// const total = products.reduce((prev, curr) => prev + curr.price, 0);
// console.log(total);

const total = products.reduce((prev, curr) => prev + curr.price, 0);
console.log(total);



//map
const names = products.map(product => product.name);
const prices = products.map(product => product.price)

// console.log(names);

// console.log(prices);

// foreach

// products.forEach(p => console.log(p.id)
// );

//filter
// const expensive = products.filter(p => p.price > 50000);
// console.log(expensive);

//find
// const expence = products.find(p => p.price > 50000);
// console.log(expence);
