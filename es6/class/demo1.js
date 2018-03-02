// class A{
// 	constructor(){
// 		this.name = 'zhangsan'
// 	}
// 	getName(){

// 	}
// }
// class B extends A{
// 	constructor(){
// 		super();
// 	}
// }

function add(){
	this.a = 1;
	this.b = 2;
}
add.prototype.foo = function(){
	console.log(1)
}
function foo(){

}
console.log(foo.prototype)
foo.prototype = Object.create(add.prototype)
console.log(foo.prototype)
foo.prototype.constructor = foo
console.log(foo.prototype)
// class Name{

	
// }
// class Person{
// 	constructor(){
// 		return new Name()
// 	}
// }
// var a = new Person();
// a instanceof Name
// return false;

// function add(){

// }
// function foo(){

// }
// foo.prototype = add.prototype
// var a = new foo();
// a instanceof add


// let a = new Person(3);
// class Person{
// 	// 定义类的实例属性，方法1
// 	// name='zhangsan'
// 	// 定义类类的静态属性， 方法1
// 	// static age: 16
// 	constructor(klass){
// 		// 定义类的实例属性，方法2
// 		this.klass = klass;
// 	}
// 	// 定义静态方法,只能通过类或者子类本身调用，不能通过实例调用
// 	static foo(){
// 		console.log('foo')
// 	}

// 	// 定义类方法，相当于定义Person.prototype.add = function(){},只能通过实例或者子类的实例调用，不能通过类或者子类本身调用，不需要function关键字，也不需要逗号隔开
// 	// 
// 	add(){
// 		console.log('add')
// 	}
// }
// // 定义静态属性，方法2
// Person.height = 180
// class Subperson extends Person{
// 	subAdd(){
// 		super.add();
// 	}
// }

// // 静态方法可以继承给子类，不能继承给实例对象

// let lily = new Person('3');
// console.log(lily)  // {klass:3}
// console.log(Person.height)	// 180
// console.log(Subperson.height)	// 180
// console.log(lily.height)	// undefined
// console.log('------')
// Person.foo();  //  foo
// Subperson.foo();  //  foo
// // lily.foo();	// TypeError: lily.foo is not a function
// console.log('------')
// // Person.add()	// TypeError: Person.add is not a function
// // Subperson.add()		// TypeError: Subperson.add is not a function
// lily.add()	// add
