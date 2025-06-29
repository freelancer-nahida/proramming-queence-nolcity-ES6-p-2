function greeting(greetEvening, name) {
    greetEvening(name);
    // console.log(person);

}

function greetEvening(name) {

    console.log('good evening ', name);

}
greeting(greetEvening, 'nahida')
greeting(greetEvening, 'dssds')
greeting(greetEvening, 'dfsdf')
greeting(greetEvening, 'trrrtyty')

// const name = 'babs';

// const numbers = [2, 5, 6, 48]
// greeting(name);

// const laptop = { price: 45000, brsand: 'walton', ram: 8 }

// greeting(laptop);

// function greetingHandler(name) {
//     console.log('good morning', name);

// }
// greeting(greetingHandler, 'suma')

function SubmitHandler() {
    console.log('submit btn clicked');

}

document.getElementById('btn-submit').addEventListener('click', SubmitHandler)