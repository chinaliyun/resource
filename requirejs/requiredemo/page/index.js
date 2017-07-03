requirejs.config ({
	baseUrl: './',
	paths: {
		'jquery': './libs/jquery-3.2.0',
		'imageCenter': './components/imageCenter',
		'request':'./libs/request',
		'API':'./libs/API',
		'dialog': './components/dialog'
	}
})

define(function(require){
	var $ = require('jquery');
	var imagelist  = document.querySelectorAll('.imgList li');
	require('imageCenter').setPosition(imagelist);
	var dialog  = require('dialog')({
		title: 'dad',
		context: 'ewd',
	});
	$('button').click(function(e){
		dialog.show().then(function(res){
			console.log(1)
		}, function(err){
			console.log(2)
		})
	})

})