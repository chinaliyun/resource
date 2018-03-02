class Person{
	constructor(){
		console.log(1)
	}
	add(){
		console.log('add')
	}
	static foo(){

	}
	// foo = function(){}
	// static name = 2;
	// name =3
}
new Person()

function Person(){
	this.name  ='zhangsan';
	this.getName = function(){return this.name}
}
Person.prototype.getAge = function(){return this.age}
Person.age = 14;

console.log(Person)
console.log(Person.age)
var zhangsan = new Person();