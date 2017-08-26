'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function add() {
	console.log(this);
	this.name = 'zhangsan';
}
add();

var foo = function foo() {
	return undefined;
};
var lisi = function lisi() {
	var _this = this;

	return function () {
		return _this;
	};
};

var person = {
	name: 'zhangsan',
	age: '13',
	getName: function getName() {
		return this.name;
	},
	getAge: function getAge() {
		return undefined.age;
	}
};

var Person = function () {
	function Person() {
		_classCallCheck(this, Person);
	}

	_createClass(Person, [{
		key: 'getName',
		value: function getName() {
			console.log(this);
		}
	}]);

	return Person;
}();

var zhangsan = new Person();
zhangsan.getName();

var student = {
	getName: function getName() {
		console.log(this);
	}
};