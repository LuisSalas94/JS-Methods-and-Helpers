/* 
The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
*/

const names = ["Daisy", "Maria", "Milagros", "Claudia"];
const numbers = [8, 7, 5, 6, 95, 34];

/*  
1. < 0 ... a comes first
2. 0 ... nothing will be changed
3. > 0 ... b comes first
*/
const sorted = numbers.sort((a, b) => a - b);

console.log(sorted);

const products = [
	{
		name: "laptop",
		price: 1000,
	},
	{
		name: "desktop",
		price: 1500,
	},
	{
		name: "phone",
		price: 500,
	},
];

//Object
products.sort((a, b) => {
	return a.price - b.price;
});

console.log(products);
