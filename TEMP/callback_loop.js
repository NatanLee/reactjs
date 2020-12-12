function loop (times = 0, callback = null){
	if(typeof callback() === 'function'){
		times = 0;
		console.log(`Функция не передана`);
	}
	for (let i = 0; i < times; i++){
		callback();
	}
}

function test(){
	console.log(`Вызов номер ${x++}`);
	
}

let x = 1;
loop(4, test);