define(function(require){
	var $ = require('jquery');
	function Dialog(config){
		this.title = config.title ? config.title : '这是标题';
		this.context = config.context ? config.context : '这是标题';
		this.created = false;
		this.ele = "<div class='dialog'>"+
					"<div class='content'>"+
					"	<p class='header'>这是标题</p>"+
					"	<p class='context'>这是内容</p>"+
					"	<div class='btnGroup'>"+
					"		<button class='ok'>确定</button>"+
					"		<button class='cancel'>取消</button>"+
					"	</div>"+
					"</div>"+
				"</div>"
	}
	Dialog.prototype = {
		constructor: Dialog,
		show: function(){
			var _this = this;
			if(_this.created){
				_this.destory();
			}
			$('body').append($(_this.ele))
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
			
		},
		destory: function(){
			$('.dialog').remove();
			$('.dialog .ok').off('click')
			$('.dialog .cancel').off('click')
		}
	}
	return function(config){
		return new Dialog(config)
	};
})