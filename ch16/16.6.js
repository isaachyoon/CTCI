function smallestDifference(arr1, arr2){
	let num1;
	let num2;
	let lowest = Number.POSITIVE_INFINITY;
	for(var i = 0; i < arr1.length; i++) {
		for(var j = 0; j < arr2.length; j++) {
			let difference = Math.abs(arr1[i] - arr2[j]);
			if(difference < lowest) {
				lowest = difference;
				num1 = arr1[i];
				num2 = arr2[j];
			}
		}
	}
	return [num1, num2];
}

let arr1 = [1, 3, 15, 11, 2];
let arr2 = [23, 127, 235, 19, 8];
let output = smallestDifference(arr1, arr2);
console.log(output)


//HOW CAN I OPTIMIZE THIS?
/*
 sort array =
 [1, 2, 3, 11, 15]
        ^
 [8, 19, 23, 127, 235]
  ^

*/

function smallestDifferenceOPT(arr1, arr2) {
	arr1.sort((x,y) => x - y);
	arr2.sort((x,y) => x - y);

	let point1 = 0;
	let point2 = 0;

	let lowest = Math.abs(arr1[point1] - arr2[point2]);
	let num1;
	let num2;
	while(point1 < arr1.length && point2 < arr2.length) {
		if(Math.abs(arr1[point1+1] - arr2[point2]) < lowest) {
			lowest = Math.abs(arr1[point1+1] - arr2[point2]);
			num1 = arr1[point1 + 1];
			num2 = arr2[point2];
			point1++;
		} else if(Math.abs(arr1[point1] - arr2[point2+1]) < lowest) {
			lowest = Math.abs(arr1[point1] - arr2[point2+1])
			num1 = arr1[point1];
			num2 = arr2[point2+1];
			point2++;
		} else {
			point1++;
			point2++;
		}
	}
	return [num1, num2]
}

let output2 = smallestDifferenceOPT(arr1, arr2)
console.log(output2)