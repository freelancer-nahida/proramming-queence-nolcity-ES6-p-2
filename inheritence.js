class Vehicle {

    constructor(name, price, seat) {
        this.name = name;
        this.price = price;
        this.seat = seat
    }

    move(carName) {
        console.log(`${carName} gari chale na gari chale na re`);

    }

}

const vehicle = new Vehicle('sder', 56, 5);

console.log(vehicle);
vehicle.move('asman');

class Bus extends Vehicle {
    constructor(name, price, seat, ticketPrice) {
        super(name, price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }
}

class bus extends Vehicle{
    
}

const bus = new Bus('audi');
console.log(bus);

///contractor are maddome object key and value add k0ora jay

// variablae are moddome  class a call kora jay

// class Vehicle(){


//     console.log(' asad  dsdds weqwq rtrt');

// }