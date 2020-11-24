/* 
The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
*/

const numbers = [1, 2, 3, 4, 5];

const result = numbers.findIndex((value) => {
	return value === 5;
});

console.log(result);
