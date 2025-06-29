print5()

console.log(print10());


for (var i = 0; i < 5; i++) {
    //     console.log(i);

}
// console.log('outsite', i);

function print5() {
    console.log('inside print', 5);

}

var print10 = function () {
    console.log('inside print', 10)

};
