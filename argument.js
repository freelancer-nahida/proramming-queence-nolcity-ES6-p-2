// function sum(a, b, c) {
//     // console.log(typeof arguments);
//     arguments.push(59);
//     const arg = [...arguments];

//     console.log(arg);

//     const result = a + b + c;
//     return result;
// }
// const total = sum(12, 55, 66, 2132, 856, 654);
// console.log(total);


// let num1 = 5;
// let num2 = 7;

// function multiple(a, b) {
//     a = 23;
//     const result = a * b;
//     return result;
// }
// const output = multiple(num1, num2)
// console.log(output);

let student1 = { name: 'nahida', partner: 'borsha' };
let student2 = { name: 'tamanna', partner: 'arohi' };

function makeMohfil(coupple1, couple2) {
    coupple1.name = 'pnonto';
    couple2.partner = 'min';


}
console.log(student1, student2);
makeMohfil(student1, student2);
console.log(student1, student2); 

