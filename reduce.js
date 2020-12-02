// const numbers = [1, 2, 3, 4, 5, 10];

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

// const store = [
// 	{
// 		product: "Laptop",
// 		value: 1000,
// 		count: 3,
// 	},
// 	{
// 		product: "Desktop",
// 		value: 1500,
// 		count: 4,
// 	},
// 	{
// 		product: "Mobile",
// 		value: 500,
// 		count: 10,
// 	},
// ];

// const result = store.reduce((acc, ele) => {
// 	return acc + ele.value * ele.count;
// }, 0);

// console.log(result);

/* 
Reduce: iterates, callback function. Reduces to a single value, number, array, object
1st parameter ('acc') - total of all calculations
2nd parameter ('curr') - current iteration, value

*/

// const people = [
// 	{ name: "Luis", age: 20, position: "developer", salary: 100 },
// 	{ name: "Peter", age: 25, position: "designer", salary: 300 },
// 	{ name: "Susy", age: 30, position: "CEO", salary: 400 },
// 	{ name: "Anna", age: 35, position: "intern", salary: 10 },
// ];

// const total = people.reduce((total, person) => {
// 	total += person.salary;
// 	return total;
// }, 0);

// console.log(total);

//Reduce Objects -> Excelent
//1st Example
// const cart = [
// 	{
// 		title: "Samsung Galaxi S7",
// 		price: 599.99,
// 		amount: 1,
// 	},
// 	{
// 		title: "Google Pixel",
// 		price: 499.99,
// 		amount: 2,
// 	},
// 	{
// 		title: "Xiaomi Redmi Note 2",
// 		price: 699.99,
// 		amount: 4,
// 	},
// 	{
// 		title: "Xiaomi Redmi Note 5",
// 		price: 399.99,
// 		amount: 3,
// 	},
// ];

// let total2 = cart.reduce(
// 	(total, cartItem) => {
// 		const { amount, price } = cartItem;
// 		//count items
// 		total.totalItems += amount;

// 		//count total price
// 		total.cartTotal += amount * price;

// 		return total;
// 	},
// 	{
// 		totalItems: 0,
// 		cartTotal: 0,
// 	}
// );

// total2.cartTotal = parseFloat(total2.cartTotal.toFixed(2));

// console.log(total2);

//2nd Example -> github repos example
const url = "https://api.github.com/users/john-smilga/repos?per_page=100";

const fetchRepos = async () => {
	const response = await fetch(url);
	const data = await response.json();
	const newData = data.reduce((total, repo) => {
		//get data from info
		const { language } = repo;
		if (language) {
			if (total[language]) {
				total[language] += 1;
			} else {
				total[language] = 1;
			}
		}

		return total;
	}, {});
	console.log(newData);
};

fetchRepos();
