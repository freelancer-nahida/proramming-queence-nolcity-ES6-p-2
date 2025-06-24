// const  difference = (x, y) => x-y;

// console.log(difference(5,3));

// function getThird(numbers) {
//     return number[2];
// }



// const getThird = numbers => numbers[2];

// const third = getThird([12, 33, 45, 67, 69])

// console.log(third);

// const doubleleIt = num => num * 2;

// console.log(doubleleIt(2));

// large math

// const doMath = (x = 0, y = 3, z = 6) => {
//     const sum = x + y + z;
//     const mult = x * y * z;
//     const result = sum + mult;
//     return result;
// }
// console.log(doMath(4, 9));

// const max = Math.max(5, 70, 54, 38);
// console.log(max);

// const min = Math.min(5, 70, 54, 38);
// console.log(min);

//array max
// const numbers = [3, 5, 6, 8, 7,56 ,99 ];

// const arrayMax = Math.max(...numbers);

// console.log(arrayMax);


// array min

// const numbers = [12, 23, 55, 64, 2, 8,]

// const arrayMin = Math.min(...numbers);

// console.log(arrayMin);

// const friends = [2, 3, 45, 6, 458];

// const bondhu = [...friends];

// bondhu.push(12);

// // console.log(bondhu);

// console.log(friends);

//object destructure

// const actor = {
//     name: 'aj',
//     age: 30,
//     phone: '01712692645',
//     money: 56666666666666663,

// }
// // const phone= actor.phone;

// const { phone, age: boyos, money: bdt } = actor;
// console.log(phone, boyos, bdt);


// array destructure

// const  numbers = [45,99];

// const [first , sec] = numbers ;

// const [x,y ] = [12,65];

// function doubleleIt( a,b){
//    return [a*2, b*2];

// }
// const [ prothom , ditiyo] = doubleleIt(6, 7)
// console.log( prothom, ditiyo);

const glass = {
    name: 'glass',
    color: 'golden',
    price: 500,
    isCleaned: true

}
Object.seal(glass);
// Object.freeze(glass);
// const { isCleaned, ...safi } = glass;
// console.log(safi);
glass.source = 'bd'


console.log(glass);
// const pair = Object.entries(glass);
// console.log(pair);

// const keys = Object.keys(glass);
// const value = Object.values(glass);

// console.log(keys);
// console.log(value);
