/* 
Rest Operator
gathers/collects items
destructuring, functions
placement important, careful with the same name
rest when declare function, spread when invoke the function
*/

//Arrays
// const fruits = ["apple", "orange", "lemon", "banana"];
// const [first, second, ...rest] = fruits;
// console.log(first, second, rest);

//Objects
const person = { name: "luis", lastName: "salas", job: "developer" };
const { job, ...rest } = person;
console.log(job, rest);

//Functions
