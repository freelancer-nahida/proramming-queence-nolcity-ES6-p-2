// class Product {
//     country = 'Bangladesh';
//     speak(talk) {
//         console.log(`taking about ${talk}`);

//     }

// }

// const laptop = new Product();
// // console.log(laptop);
// laptop.speak('kemon aso')

// class Teacher {
//     lecture(subject) {
//         console.log(`Sir is Teaching ${subject}`);

//     }

// }

// const teachers = new Teacher();
// teachers.lecture('math');
// teachers.lecture('science');
// teachers.lecture('chemistry');


// class Introduction {
//     constructor(name, hscYear, institute) {
//         this.name = name;
//         this.hscYear = hscYear;
//         this.institute = institute;


//     }
// }

// const intro = new Introduction(' Tanjila', 2021, 'Bam College');

// console.log(intro);

class Vehicle {
    constructor(brk, speed,) {
        this.brk = brk;
        this.speed = speed;

    }
}

// class Bus extends Vehicle {

//     constructor(brk, speed, wheel, seat) {
//         super(brk, speed);

//         this.wheel = wheel;
//         this.seat = seat;
//     }
// }

class motorcycle extends Vehicle {

    constructor(brk, speed, wheel, seat, fueltank) {
        super(brk, speed);

        this.wheel = wheel;
        this.seat = seat;
        this.fueltank = fueltank
    }
}
// const bus = new Bus(true, true, 4, 40);
const motor = new motorcycle(true, true, 2, 2, 1)

// console.log(bus);
console.log(motor);


// class Fathershome {
//     constructor(lap, tosok, thala) {

//         this.lap = lap;
//         this.tosok = tosok;
//         this.thala = thala;

//     }


// }

// class bargunaHome extends Fathershome {

//     constructor(lap, tosok, thala, bati, glass, table) {
//         super(lap, tosok, thala);
//         this.bati = bati;
//         this.glass = glass;
//         this.table = table;
//     }
// }

// const home = new bargunaHome(1, 1, 6, 3, 6, 1);
// console.log(home);


class BiraniCook {
    constructor(rice, maton) {
        this.rice = rice;

        this.maton = maton;


    }


}

class biraniMosla extends BiraniCook {

    constructor(rice, maton, milk, mosla) {

        super(rice, maton);

        this.milk = milk;

        this.mosla = mosla;
    }
}

const birani = new biraniMosla('1-kg', '1kg', '250Gamepad', '15item');

console.log(birani);s
