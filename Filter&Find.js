const people = [
	{ name: "Luis", age: 20, position: "developer" },
	{ name: "Peter", age: 25, position: "designer" },
	{ name: "Susy", age: 30, position: "CEO" },
	{ name: "Anna", age: 35, position: "intern" },
];

//filter -> people <= 25
const young = people.filter((person) => {
	return person.age <= 25;
});

console.log(young);

//no match
const seniorDevs = people.filter((person) => {
	return person.position === "senirDev";
});

console.log(seniorDevs);

//find
const peter = people.find((person) => {
	return person.name === "Peter";
});

console.log(peter);

//no match
const oldPeople = people.find((person) => {
	return person.age > 35;
});

console.log(oldPeople);
