/* 
The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
*/

function fillInNumbers(n) {
	return Array(n)
		.fill(0)
		.map((_, idx) => idx + 1);
}

console.log(fillInNumbers(12));
