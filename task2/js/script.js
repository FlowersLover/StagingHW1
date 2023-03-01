function addition(a, b) {//4
	return a + b;
}
function subtraction(a, b) {
	return a - b;
}
function division(a, b) {
	return a / b;
}
function multiplication(a, b) {
	return a * b;
}
class Product {//3
	name;
	price;
	quantity;
	description;
	// методы класса
	constructor(name, price, quantity, description) {
		this.name = name;
		this.price = price;
		this.quantity = quantity;
		this.description = description;
	}
	get name() {
		return this._name;
	}
	get price() {
		return this._price;
	}
	get quantity() {
		return this._quantity;
	}
	get description() {
		return this._description;
	}
	set name(value) {
		this._name = value;
	}
	set price(value) {
		this._price = value;
	}
	set quantity(value) {
		this._quantity = value;
	}
	set description(value) {
		this._description = value;
	}
}

function returnMatchingObjects(productArr, str) {//комментарии что означают входные параметры
	var re = /(description|name|price|quantity)-?(contains|starts|ends|<|=|>|<=|>=)-?(\w+|\d+)&?/g;
	let map = stringToMap(str, re);
	let productTamplate = stringToProduct(str, re);
	let resultArr = [];
	for (let i = 0; i < productArr.length; i++) {
		let checkName = stringToFunction(productArr[i].name, map.get("name"), productTamplate.name);
		let checkDescription = stringToFunction(productArr[i].description, map.get("description"), productTamplate.description);
		let checkPrice = stringToFunction(productArr[i].price, map.get("price"), productTamplate.price);
		let checkQuantity = stringToFunction(productArr[i].quantity, map.get("quantity"), productTamplate.quantity);
		if (checkName & checkPrice & checkDescription & checkQuantity) {
			resultArr.push(productArr[i]);
		}
	}
	return resultArr;
}
//res[1] //поле
//res[2] //метод
//res[3] //значение
function stringToProduct(str, re) {
	let productTamplate = new Product(" ", 0, 0, " ");
	var res
	while ((res = re.exec(str)) != null) {
		switch (res[1]) {
			case ("name"):
				productTamplate.name = res[3];
				break;
			case ("description"):
				productTamplate.description = res[3];
				break;
			case ("price"):
				productTamplate.price = res[3];
				break;
			case ("quantity"):
				productTamplate.quantity = res[3];
				break;
			default:
				break;
		}
	}
	return productTamplate;
}
function stringToMap(str, re) {
	let actionMap = new Map();
	var res;
	while ((res = re.exec(str)) != null) {
		actionMap.set(res[1], res[2]);
	}
	return actionMap;
}
function stringToFunction(value, action, tamplatevalue) {//
	switch (action) {
		case ("starts"):
			return value.startsWith(tamplatevalue);
			break;
		case ("contains"):
			return value.includes(tamplatevalue);
			break;
		case ("ends"):
			return value.endsWith(tamplatevalue);
			break;
		case ("="):
			return (value == tamplatevalue);
			break;
		default:
			return eval(value + action + tamplatevalue);
			break;
	}
}

let productArr = [new Product("fdttNAME", 2, 50, "DESCRIPTIONgdffabc"),
new Product("name", 0, 5, "aaabc")];
let str = "name-contains-fd&price-=2-&quantity->5&description-ends-abc";
var re = /(description|name|price|quantity)-?(contains|starts|ends|<|=|>|<=|>=)-?(\w+|\d+)&?/g;
let resultArr = returnMatchingObjects(productArr, str);