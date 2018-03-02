'use strict';

var options = {
  name: 'zhangsan',
  age: 14,
  sex: 'male'
};

var name = options.name,
    age = options.age;


console.log(name, age);

var person = ['zhangsan', 'lisi', 'wangwu'];
var a = person[0],
    b = person[1];

console.log(a, b);

function add(_ref) {
  var name = _ref.name,
      age = _ref.age,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 30 : _ref$height;

  console.log(name, age, height);
}

add(options);