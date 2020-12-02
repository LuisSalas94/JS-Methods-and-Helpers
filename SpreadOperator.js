//Spread and iterable to spread/expand individually inside reciever
//Split into single items and COPY them

const udemy = "udemy";
const letter = [...udemy];
console.log(letter);

const boys = ["john", "peter", "bob"];
const girls = ["susan", "anna"];
const bestFriend = "arnold";

const friends = [...boys, ...girls, bestFriend];
console.log(friends);

//copy
const newFriends = [...friends];
newFriends[0] = "nancy";
console.log(friends);
console.log(newFriends);

//ES2028 - ES8 Objects
const person = { name: "luis", job: "developer" };
const newPerson = { ...person, city: "lima", name: "fernando" };
console.log(person);
console.log(newPerson);
