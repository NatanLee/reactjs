function calculateArea(figure, ...rest){
//	console.log(rest);
	let area, input;
	switch (figure){
//через псевдомассив arguments		
		case 'square':
			area = arguments[1]*arguments[2];
			input = `Сторона А: ${arguments[1]}, Сторона Б: ${arguments[2]}`;
			break;
//через Остаточные параметры (...) 			
		case 'circle':
			area = rest[0]*rest[0]*3.14;
			input = `Радиус: ${rest[0]}`;
			break;
		default:
			throw new Error('Something unexpected...')
			break;
		
	}
	
	return {
		"area": area,
		"figure": figure,
		"input": input
	}
}

console.log(calculateArea('square', 3, 5));
console.log(calculateArea('circle', 4));
console.log(calculateArea('line', 4));