const players = [52, 23, 56, 45, 78, 89, 23, 65];

// const selected = players.filter(p => p < 60);

// j

const selected = players.find(p => p % 3 === 1);

console.log(selected);

const friends = ['tom', 'sdf', 'qwee', 'rtr', 'sfdsff'];

const myFriends = friends.find(friends => friends.length < 4);

console.log(myFriends);


