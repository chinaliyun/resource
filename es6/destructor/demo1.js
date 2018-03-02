// let a;
// let {a} = {a: 1};
// console.log(a)

// const a = 2;
// [a] = [2];
// 
// 

// let a,b
// {a,b} = {a: 1, b: 2}; 

// let {toString: s} = 12;
// console.log(s.toString())
// let {toString: e} = true;
// console.log(e.toString())
// console.log(s.call('zhangsan'))

// let {a=1, b=2, c=3} = {a: undefined, b: null};
// console.log(a);  // 1
// console.log(b);  // null
// console.log(c);  // 3


function add({a=3}){
	console.log(a)
}
add({a: 4});  					// 4
add({a: undefined});  			// 3
add({a: null});    			 	// null