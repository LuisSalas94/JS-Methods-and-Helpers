/* const numbers = [1, 2, 3, 4, 5];

const doubleNum = numbers.map((number) => {
	return number * 2;
});

const indexMul = numbers.map((number, index) => {
	return number * index;
});

console.log(indexMul); */

/* const products = [
	{
		name: "laptop",
		price: 1000,
		count: 5,
	},
	{
		name: "desktop",
		price: 1500,
		count: 2,
	},
	{
		name: "phone",
		price: 500,
		count: 10,
	},
];

let finalResult = products.map((product) => {
	return {
		name: product.name,
		totalValue: product.price * product.count,
	};
});

console.log(finalResult); */

const srt = ["1", "2", "3", "4"];

const numbers = srt.map(Number);

console.log(numbers);
