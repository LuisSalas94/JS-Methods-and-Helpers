//dot notation
const person = {
	name: "Luis",
};

console.log(person.name);
person.age = 23;
console.log(person);

//square bracket notation
const items = {
	featured_items: ["item1", "item2"],
};

console.log(items["featured_items"]);
console.log(person["name"]);

let appState = "loading";
appState = "error";

const keyName = "error";

const app = {
	[appState]: true,
};

app[keyName] = "apple";
console.log(app);

const state = {
	loading: true,
	name: "",
	job: "",
};

function updateState(key, value) {
	state[key] = value;
}

updateState("job", "porn actor");
updateState("loading", false);
updateState("name", "Luis");
console.log(state);
