function Person(){
	this.a = 1;
}
Person.prototype.age = 2
console.log(new Person())
console.log(new Person().__proto__)



