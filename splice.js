/* The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
*/

const numbers = [1, 2, 3, 4, 5];

const deleted = numbers.splice(2, 3, 6, 7);

console.log(numbers);

console.log(deleted);
