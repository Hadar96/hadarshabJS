// Ex 1 //

function printObject (obj) {
	for (let key in obj) {
		let val = obj[key];
		
		if (typeof(val) == 'object') {
			printObject(val);
		}
		else if (typeof(val) == 'function') { }
		else {
			console.log(`${key.toUpperCase()} : ${obj[key]}`);	
		}
	}
}

const me = {
	name: 'Hadar', age: 23,
	address: {city: 'Holon', country: 'Israel'},
	getAddress() { return this.address; },
	printMyName() { console.log(this.name); },
	howManyRelatives() { return this.family.length; },
	addFamilyRelative(reltv) { this.family.push(reltv); }
};
me.family = [
	{name: 'Moses', member: 'Dad'},
	{name: 'Sharon', member: 'Mom'},
	{name: 'Or', member: 'Brother'}
];
me.setName = function(newName) { this.name = newName; }

var sister = {name: 'Yuval', member: 'Sister'};
me.addFamilyRelative(sister);

printObject(me);
