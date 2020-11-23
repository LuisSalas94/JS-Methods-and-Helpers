/* 
The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
*/

const names = ["Daisy", "Maria", "Milagros", "Claudia"];
const fruits = ["Apple", "Orange", "Mango"];

const result = fruits.includes("Mango");
const final = result ? "Yuppy" : "Fuck!!";

console.log(final);
