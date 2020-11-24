/* 
The find() method returns the value of the first element in the provided array that satisfies the provided testing function.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
*/

const persons = [
	{ name: "Maria", age: 23 },
	{ name: "Gozde", age: 26 },
	{ name: "Claudia", age: 21 },
];

const result = persons.find((person) => {
	return person.age === 23;
});

console.log(result);
