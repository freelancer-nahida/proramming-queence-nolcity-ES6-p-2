function Kitchen() {
    let rost = 0;
    return function () {
        rost = rost + 2
        return rost;
    }

}

const maintable = Kitchen();

console.log(maintable());
console.log(maintable());
console.log(maintable());
