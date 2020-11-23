/* 
The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const result = numbers.some((number) => {
	return number > 4;
});

console.log(result);
