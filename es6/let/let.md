> ES5中出现变量提升的案例
```
var a = [];
for(var i=0; i<10; i++){
	a[i]= function(){
		console.log(i)
	}
}
a[1]();  //  10
```
这个案例中结果为10，就是以为i是一个全局变量，在循环结束后i的最终值为10，所以输出结果也是10，把循环中的var修改成let的结果就是1了。

> for循环中设置循环的部分是一个作用域，循环体内部又是一个作用域，比如
```
for(let i=0; i<10; i++){
	let i = 100;
	console.log(i)
}
```
执行后我们会发现输出了3次100，而不是输出循环条件中i的值


> let所声明的变量，必须在声明之后使用，否则就会报错。这在语法上被称为：暂时性死区。
```
console.log(a) 
let a = '123';
```
上面的句子中就会暴露`ReferenceError: a is not defined`的错误。这个错误会直接导致程序的停止运行，而不是我们常见的输出到控制台就继续下一步了。

> 有一些死区比较隐蔽，比如：
```
test(x=y,y=1){
	console.log(x)
}
test()
```
这里也会暴露`ReferenceError: y is not defined`的错误，并且停止执行当前程序,因为我们在赋值给a的时候，y还没有被声明

> 在相同作用域内不允许重复声明同一个变量，比如
```
function add(){
	let a = 1;
	let a = 2;
}
// 或者
function add(a){
	let a = 2;
}
```
这里要注意一点，普通函数和for循环的作用域不同，for循环中，循环条件和循环体是各自单独的作用域，可以看上面的例子

> 内层变量覆盖外层变量的例子：
```
var tmp = '123';
function add(){
	console.log(tmp)
	if(true){
		var tmp = '456';
	}
}
add()
```
函数调用该过程中会遵循生成变量对象-建立作用域链-确定this指向-变量赋值-函数引用-执行其他代码的几个阶段，add函数执行的时候，发现函数体内有一个tmp的变量，先赋值为undefined后，才开始执行console.log代码，因此add运行的结果就是`undefined`

> 临时使用的变量泄露成了全局变量
```
for(var i=0; i<10; i++){
	console.log(i)
}
console.log(i) // 9
```
这里的变量i在循环执行完后，并没有被销毁，而是泄露成了全局变量，就会导致程序内存占用量的增大。

> let为所在的代码块新增了会块级作用域，使得外层代码不受内层代码块的影响，且外层无法访问内层声明的变量，也代替了之前广泛使用的为了保留单独作用的立即执行函数表达式,比如：
{
	let a = 1;
	{
		let a = 2;
		let b = 3;
		console.log(a) // 2
	}
	console.log(a) // 1
	console.log(b) // ReferenceError b is not defined
}

> ES5中虽然明确规定函数只能在顶层作用和函数作用域中声明，但是几乎所有的浏览器都没有遵循这个规则，因此ES6中明确规定了如果在块级作用域中声明了函数，这个声明函数的行为相当于let，在块级作用域之外是不可使用的
```
function add(){
	console.log('outside')
}
function foo(){
	if(true){
		function add(){
			console.log('inside')
		}
	}		
	add();
}
foo();
```
上面代码在非严格模式下，执行的结果是`inside`,严格模式下执行的结果是`outside`

> 因此在开发过程中，应当尽量避免在块级作用域声明函数，如果确实需要也应当写成函数声明表达式而不会函数声明语句
```
{
	function add(){}  // 不推荐
}

{
	var add = function(){} // 推荐的
}
```

> 另外，ES6中允许在块级作用域中声明函数的规则，必须在大括号中才能成立，如果没有大括号，就会报错
```
'use strict'
if(true){
	function add(){} //执行时不会报错
}

'use strict'
if(true)
	function add(){} //执行时报错，终止进程
```

> const声明一个只读的常量，且声明之后不能改变，因此const声明常量的时候，必须赋值。
```
const add;   //只声明不复制会报错
const a = '123';
a = '456';  // 直接报错，终止进程
```

> const实际上保证的是常量对应的内存地址不允许改变，因此使用const声明一个对象常量的手，不能把常量指向另一个地址，但对象本身是可以改变的
```
const foo = {}
foo.a = 1; // 正确的
foo.b = 2; // 正确的
foo = 1;  // 错误的，报错
```

> 如果const声明的常量指向一个被冻结的对象，那么该对象也是不可改变的
```
const foo = Object.freeze({});
foo.a = 1; // 报错
```

ES6规定var与function声明的全局变量仍然是顶层对象，let和const声明的全局变量，不再属于顶层对象



