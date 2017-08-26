Demo中的知识点
=

在html中引入
-
```
<script type="text/javascript" data-main="./page/index.js" src="libs/require.js"></script>
```
先引入requireJS，再通过data-main属性来告诉requireJS主模块的文件路径

配置模块路径
-
通过
```
requirejs.config({
	baseUrl: './',
	paths: {
		'jquery': './libs/jquery'
	}
})
```
初始化模块，参数：
1. baseUrl: 所有模块的起始加载位置(前缀)
2. paths: 定义模块相对于baseUrl的路径，以及他的简单名称，便于后面引用
3. baseUrl与path中的路径都必须是相对路径
4. baseUrl路径是相对于data-main属性指定的文件路径

自定义模块
-
通过
```
define(function(require){
	
})
```
来自定义模块，每个模块必须有自己的返回内容，也就是必须有return，可以是任何类型

使用模块
-
在requirejs.config()之后，可以直接通过
```
define(function(require){
	var $ = require('jquery')
})	
```
来引入其他模块，或者执行其他内容，比如引入jQuery来操作相应的DOM

自定义弹窗中的返回内容
-
在之前，自定义弹窗中的ok和cancel事件，我都是直接通过参数传递进去的，事件和destory一同执行，现在有了一种新的方法，那就是在显示弹窗的时候，直接返回一个promise事件，在这个事件中来定义ok与cancel的默认事件，比如destory这个弹窗，这样一来，在外部调用show方法之后，就可以通过then得知用户点击的是OK还是cancel
```
return new Promise(function(res, rej){
	$('.dialog .ok').on('click',function(){
		_this.destory();
		res();
	})
	$('.dialog .cancel').on('click',function(){
		_this.destory();
		rej();
	})
})

```




