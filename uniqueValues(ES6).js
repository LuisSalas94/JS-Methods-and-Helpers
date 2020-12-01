const menu = [
	{
		name: "pancakes",
		category: "breakfast",
	},
	{
		name: "burger",
		category: "lunch",
	},
	{
		name: "steak",
		category: "dinner",
	},
	{
		name: "bacon",
		category: "breakfast",
	},
	{
		name: "eggs",
		category: "breakfast",
	},
	{
		name: "pasta",
		category: "dinner",
	},
];

const categories = new Set(
	menu.map((item) => {
		return item.category;
	})
);

//convert the object into an array
//option 1
const final = Array.from(categories);

//option2
const categories2 = [
	...new Set(
		menu.map((item) => {
			return item.category;
		})
	),
];

console.log(final);
console.log(categories);
console.log(categories2);
