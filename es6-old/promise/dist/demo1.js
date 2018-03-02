var promise = new Promise(function (resolve, reject) {
	return 1 == 1 ? resolve() : reject();
});
promise.then(function (vlaue) {
	console.log(1);
}, function () {
	console.log(2);
});