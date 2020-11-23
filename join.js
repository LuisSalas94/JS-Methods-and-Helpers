/* 
The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
*/

const countries = ["Argentina", "Norway", "Lisbon"];
const res = countries.join(", ");

console.log("I wanna visit " + res);
