'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
	function Person() {
		_classCallCheck(this, Person);

		console.log(1);
	}

	_createClass(Person, [{
		key: 'add',
		value: function add() {
			console.log('add');
		}
	}], [{
		key: 'foo',
		value: function foo() {}
		// foo = function(){}
		// static name = 2;
		// name =3

	}]);

	return Person;
}();

new Person();

function Person() {
	this.name = 'zhangsan';
	this.getName = function () {
		return this.name;
	};
}
Person.prototype.getAge = function () {
	return this.age;
};
Person.age = 14;

console.log(Person);
console.log(Person.age);
var zhangsan = new Person();