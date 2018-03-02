var promise = new Promise(function(resolve, reject){
	setTimeout(function(){
		resolve();
	}, 1000)
});

promise.then(function(res){
	console.log(1)
})


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






