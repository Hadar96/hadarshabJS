/************************ 	Ex 1 - 21.07 	************************/

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
	getAddress () { return this.address; },
	printMyName () { console.log(this.name); },
	howManyRelatives () { return this.family.length; },
	addFamilyRelative (reltv) { this.family.push(reltv); }
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


// Mobile phones part : 

// Function
function CreateMobilePhone (brand, model, number, size, price) {
	return {
		brand, model, number, size, price,
		getNumber () { return this.number; },
		setNumber (newNum) { this.number = newNum; }
	}
}

// CTOR
function MobilePhone (brand, model, number, size, price) {
	this.brand = brand;
	this.model = model;
	this.number = number;
	this.size = size;
	this.price = price;
	
	this.getNumber = function () { return this.number; }
	this.setNumber = function (number) { this.number = number; }
}

const phone1 = CreateMobilePhone('LG', 'G', 5, 5.64, 2100);
const phone2 = new MobilePhone('Xiaomi', 'MI', 8, 6.11, 1500);
