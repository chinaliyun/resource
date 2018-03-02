function add(){
    console.log(this)
    this.name = 'zhangsan'
}
add() 

var foo = () => this;
var lisi = function(){
	return ()=>this
}

var person = {
	name: 'zhangsan',
	age: '13',
	getName : function(){
		return this.name
	},
	getAge : ()=>this.age
};


class Person{
	getName(){
		console.log(this)
	}
}
var zhangsan = new Person();
zhangsan.getName();



var student = {
	getName: function(){
		console.log(this)
	}
}