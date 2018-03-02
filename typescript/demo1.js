function add(shape) {
    return "name is " + shape.name + ",and age is " + shape.age;
}
console.log(add({
    name: "zhangsan",
    age: 18
}));
var obj = {
    name: "zhangsan",
    getName: function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.name);
        });
    }
};
var data = {
    name: "zhangsan",
    age: 15
};
function sum(_a) {
    var name = _a.name, age = _a.age;
    console.log();
}
sum(data);
