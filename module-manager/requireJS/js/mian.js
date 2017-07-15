// 定义配置文件
require.config({
	paths : {
		'jquery':['jquery-1.11.2']
		// 'other':['other']
	}
})
// 加载配置文件
require(['jquery'],function(){
	console.log($('body'))
})

// 加载自定义的脚本文件
require(['other'],function(other){
	console.log(other)
})