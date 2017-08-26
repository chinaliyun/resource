console.log('animate.js was running')

function translate(ele){
	var offset = $(ele).offset(),
		eleWidth = $(ele).width();
	console.log(offset);
	ele.css({
		'opacity': 1,
		'left': '-'+eleWidth+'px'
	})
	/*ele.animate({
		'left': offset.left
	},1000);*/
}