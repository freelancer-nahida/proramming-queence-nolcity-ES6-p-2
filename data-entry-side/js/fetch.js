// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
// 
//     .then(json => console.log(json))

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(res => res.json())
//     .then(json => console.log(json))

// const url = 'https://jsonplaceholder.typicode.com/todos/1'

// function loadData() {
//     fetch(url)
//         .then(pro => pro.json())
//         .then(json => console.log(json))
// }
// const url = 'https://jsonplaceholder.typicode.com/todos/1'



// fetch('https://jsonplaceholder.typicode.com/user')
//     .then(res => res.json())
//     .then(data => console.log(data))

// function displayUsers(users) {
//     const ul = document.getElementById("user-list");
//     for (const user of users) {
//         // console.log(user).email;

//         const li = document.createElement('li');
//         li.innerText = user;
//         ul.appendChild(li);
//     }
// }


function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(pro => pro.json())
        .then(json => console.log(json))
}


// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => console.log(data))

function loadUsers() {

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers(data))
}

// function displayUsers(users) {
//     // console.log(data);
//     const ul = document.getElementById('user-list')

//     for (const user of users) {
//         // console.log(user.email);
//         const li = document.createElement('li');
//         li.innerText = user.name;
//         ul.appendChild(li);
//     }

// }
function displayUsers(users) {
    // console.log(data);
    const ul = document.getElementById('user-list')

    for (const user of users) {
        // console.log(user.email);
        const li = document.createElement('li');
        li.innerText = user.email;
        ul.appendChild(li);
    }

}