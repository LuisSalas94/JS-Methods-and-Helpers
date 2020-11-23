const numbers = [1, 2, 3, 4, 5, 10];

/* const total = numbers.reduce((acc, ele) => {
	return acc + ele;
}, 0);
 */
/* 
const max = numbers.reduce((acc, ele) => {
	if (acc > ele) {
		return acc;
	} else {
		return ele;
	}
}, 0); */

/* const max = numbers.reduce((a, b) => {
	return Math.max(a, b);
}, 0); */

const store = [
	{
		product: "Laptop",
		value: 1000,
		count: 3,
	},
	{
		product: "Desktop",
		value: 1500,
		count: 4,
	},
	{
		product: "Mobile",
		value: 500,
		count: 10,
	},
];

const result = store.reduce((acc, ele) => {
	return acc + ele.value * ele.count;
}, 0);

console.log(result);
