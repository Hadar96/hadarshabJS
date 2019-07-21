// Ex 1 //

function printObject (obj) {
	for (let key in obj) {
		let val = obj[key];
		
		if (typeof(val) == 'object') {
			printObject(val);
		} else {
			console.log(`${key.toUpperCase()} : ${obj[key]}`);	
		}
	}
}

const me = {name: 'Hadar', age: 23};
me.address = {city: 'Holon', country: 'Israel'};
me.family = [
	{name: 'Moses', member: 'Dad'},
	{name: 'Sharon', member: 'Mom'},
	{name: 'Or', member: 'Brother'}
];

printObject(me);
