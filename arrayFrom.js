/* 
The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.
Parameters
arrayLike
  An array-like or iterable object to convert to an array.
mapFn Optional
  Map function to call on every element of the array.
thisArg Optional
  Value to use as this when executing mapFn.
Return value
  A new Array instance.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
*/

// const str = "1234567";

// const result1 = Array.from(str, (number) => {
// 	return Number(number);
// });

// console.log(result1);

/* 
The Set constructor lets you create Set objects that store unique values of any type, whether primitive values or object references.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/Set
*/

//remove the duplicate values
// const numbers = [1, 2, 3, 3, 2, 1, 4, 4, 3, 2, 1, 5];

// const result = Array.from(new Set(numbers));

// console.log(result);

/* ******************************** */

const text = document.querySelectorAll(".text");
const newTest = Array.from(text).find((item) => item.innerHTML === "person");

//How to make a dynamic pagination -> Awesome
const items = Array.from({ length: 120 }, (_, index) => {
	return index;
});

const itemsPerPage = 14;
const pages = Math.ceil(items.length / itemsPerPage);
const newItems = Array.from({ length: pages }, (_, index) => {
	const start = index * itemsPerPage;
	const tempItems = items.slice(start, start + itemsPerPage);
	return tempItems;
});

console.log(newItems);
