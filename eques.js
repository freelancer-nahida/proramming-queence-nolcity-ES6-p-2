// const first = 2;
// // const sec = ' 2';
// const sec = false;

// if (first == sec) {
//     console.log('they are equal');

// }
// else {
//     console.log('they are not equal');

// }
// type coercion

// console.log('5' + 5);
// Always use ===
// non-premitive dosen,t work on equal

// const first = { x: 5 };
// // const sec = ' 2';
// const sec = { x: 5 };

// if (first == sec) {
//     console.log('they are equal');

// }
// else {
//     console.log('they are not equal');
// }
const first = [];
// const sec = ' 2';
const sec = first;

if (first == sec) {
    console.log('they are equal');

}
else {
    console.log('they are not equal');
}