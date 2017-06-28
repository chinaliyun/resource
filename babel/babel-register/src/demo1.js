/*module.exports = {
	add: function(){
		console.log(1)
	}
}*/

export function add(){
	var arr = Array.from({0:'zhangsan','1':'lisi','length':2});
	console.log(arr)
	console.log(typeof arr)
}