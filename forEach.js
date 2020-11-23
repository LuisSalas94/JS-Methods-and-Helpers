const numbers = [1, 2, 3, 4, 5];
let sum = 0;

/* numbers.forEach((item, index, arr) => {
	return console.log(item);
}); */

numbers.forEach((num) => {
	return (sum += num);
});

const letters = ["a", "b", "c", "d", "e", "e"];
let count = {};

letters.forEach((letter) => {
	if (count[letter]) {
		count[letter]++;
	} else {
		count[letter] = 1;
	}
});

console.log(count);
