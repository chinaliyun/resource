gulp+babel编译es文件，最基础的配置文件如下：
=
package.json
-
```
"devDependencies": {
  "babel-preset-es2015": "^6.24.1",
  "gulp": "^3.9.1",
  "gulp-babel": "^6.1.2"
}
```

.babelrc
-
```
{
  "presets":['es2015']
}
```

gulpFile.js
-
```
var gulp = require('gulp');
var babel = require('gulp-babel');


var src = __dirname + '/src';
var opt = __dirname + '/output';
gulp.task('default', function(){
  gulp.src(src + '/**/*.es')
    .pipe(babel())
    .pipe(gulp.dest(opt))
})
```

箭头函数
=
箭头函数中最关键的就是this的作用域了，在ES6中，会默认采用严格模式，因此this也不会自动指向window对象了，而箭头函数本身并没有this，因此this就只能是undefined
```
const name = 'zhangsan';
const age = '14';
const sex = 'male';

let options = {
	name,
	age,
	sex: 'female',
	getName(){
		return this.name
	},
	getAge: function(){
		return this.age
	},
	getSex: ()=>sex,
	getRealSex: ()=>options.sex
};

console.log(options.getName())  	//'zhangsan'
console.log(options.getAge()) 		// '14'
console.log(options.getSex()) 		// 'male'
console.log(options.getRealSex()) 	// 'female'

```
在上面的案例中，使用箭头函数的方法中，只有getRealSex可以得到正确的结果，因为getSex最后返回的实际上是global.sex的值。


再看一个案例：
```

const person = {
    name: 'tom',
    getName: function() {
        return () => this.name
    }
}
console.log(person.getName()())  	// 'tom'
````
在这个案例中，为什么this又可以用了呢？首先，getName方法不是一个箭头函数，他里面还是有this的，这个this指向了他的拥有者person，但是getName()执行后他返回的是一个箭头函数，由于箭头函数里面是没有this变量的，他就会向上查找，发现了getName()中有this这个变量，也就是person，因此这里通过this.name照样可以返回正确的值，但是在获取的时候，需要运行两次方法


Promise
=
promise主要有三种用法：

1. 通过new Promise返回一个promise对象
2. 给最初的promise传递参数
3. Promise.all()方法

案例： 通过new Promise返回一个promise对象
-
```
var promise = new Promise(function(resolve, reject){
	setTimeout(function(){
		resolve();
	}, 1000)
});

promise.then(function(res){
	console.log(1)
})
```
案例： 给最初的promise传递参数
-
```
function add(num){
	return new Promise(function(resolve, reject){
		if(num>5){
			resolve(num)
		}else{
			reject(5)
		}
	})
}

add(6).then(function(res){
	console.log(res)
}, function(err){
	console.log(err)
})
```
案例： Promise.all()方法
-
```
function foo(timer1, timer2){
	return Promise.all([timer1, timer2])
}

function getJSON(url){
	return new Promise(function(resolve, reject){
		var xhr = new XMLHttpRequest();
		xhr.open('get', url, true);
		xhr.send()

		xhr.onreadystatechange = function(){
			if(xhr.readyState==4 && xhr.status == 200){
				try{
					var res = xhr.responseText;
					resolve(res);
				} catch (e) {
					reject(e)
				}
			}
		}
	})
}

foo(getJSON('./json1.json'), getJSON('./json2.json')).then(function(res){
	console.log(res)
}, function(err){

})
```









