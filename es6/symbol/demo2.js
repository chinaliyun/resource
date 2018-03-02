let po = Symbol('foo');
global[po] = 1;
module.exports = global[po];