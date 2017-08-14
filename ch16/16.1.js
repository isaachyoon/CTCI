function numberSwapper(num1, num2) {
	num1 *= num2;
	num2 = num1 / num2;
	num1 = num1 / num2;
	console.log('num1', num1);
	console.log('num2', num2);
}

console.log(numberSwapper(6, 7))

/*
	6*7 = 42
	7
	42 / 7 = 6

*/