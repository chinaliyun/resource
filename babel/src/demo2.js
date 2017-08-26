require("babel-core/register")
require("./demo1.js");
$(function(){
	var bg1 = getInfo($('.bg1'));
		bg2 = getInfo($('.bg2'));
		bg3 = getInfo($('.bg3'));
		bg4 = getInfo($('.bg4'));
		ani =$('.nr');
	console.log(bg1);
	$(window).scroll(function(){
		var scrollT = $(window).scrollTop();
		if(scrollT > 0　&& scrollT < bg1.bottom-bg1.height/3){
			animateTarget(0)
		}
		if(scrollT > bg2.top　&& scrollT < bg2.bottom-50){
			animateTarget(bg2.top)
		}
		if(scrollT > bg3.top　&& scrollT < bg3.bottom-50){
			animateTarget(bg3.top)
		}
		if(scrollT > bg4.top　&& scrollT < bg4.bottom-50){
			animateTarget(bg4.top)
		}
	})
	function getInfo(ele){
		var thisT = $(ele).offset().top,
			thisH = $(ele).height();
		return {
			top: thisT,
			height: thisH,
			bottom: thisT + thisH
		}
	}
	function animateTarget(top,time){
		ani.stop(true,true).animate({
			"top": top+"px"
		},time || 400)
	}
})