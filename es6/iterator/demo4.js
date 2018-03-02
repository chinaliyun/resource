var obj = {};
obj[Symbol.iterator] = () => 1;
var it = obj[Symbol.iterator]();
it.next();