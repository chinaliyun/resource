require.config({
    paths: {
        // 'zepto': ['zepto.js'],

    },
    shim: {
	    'animate': {
	        exports: 'animate'
	    }
	}

})
require(['zepto','animate'], function(){
	console.log(2)
	$(function(){
		var sectionIndex = 100;
		$.each($('section'),function(index,item){
			$(item).css('z-index',sectionIndex);
			sectionIndex--;
		})
		$('section').click(function(){
			console.log(this)
			translate($(this).find('h1'));
		})
	})
})