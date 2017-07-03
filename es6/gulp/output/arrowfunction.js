'use strict';

var name = 'zhangsan';
var age = '14';
var sex = 'male';

var options = {
	name: name,
	age: age,
	sex: 'female',
	getName: function getName() {
		return this.name;
	},

	getAge: function getAge() {
		return this.age;
	},
	getSex: function getSex() {
		return sex;
	},
	getRealSex: function getRealSex() {
		return options.sex;
	}
};

// console.log(options.getName())
// console.log(options.getAge())
// console.log(options.getSex())
// console.log(options.getRealSex())


var person = {
	name: 'tom',
	getName: function getName() {
		var _this = this;

		return function () {
			return _this.name;
		};
	}
};
console.log(person.getName()());