define(function(require){
	var request = require('request');

	return {
		setPosition: function(domList){
			var $ = require('jquery');
			domList.forEach(function(item, index){
				console.log(item.getAttribute('data-bg'))
				var img = new Image();
				img.src = item.getAttribute('data-bg');
				img.onload = function(){
					var pw  = img.width;
					var ph = img.height;
					var ew = item.clientWidth;
					var eh = item.clientHeight;
					// console.log(item.clientWidth, item.clientHeight)
					// console.log(img.width, img.height)
						if(ph*ew/pw>=eh){
							// item.className = 'fillx'
							$(item).addClass('fillx')
						}else{
							// item.className = 'filly'
							$(item).addClass('filly')
						}
						$(item).css({
							"background-image":"url("+img.src+")"
						})
					
				}
			})
		}
	}
})