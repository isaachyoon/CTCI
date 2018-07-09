/*
Given two arrays of integers, 
compute the pair of values (one value in each array) with the smallest (non-negative) difference.
Return the difference
*/

/*
	[1, 3, 15, 11, 2]
	[23, 127, 235, 19, 8]

	[1, 2, 3, 11, 15] [8, 19, 23, 127, 235]
	          ^        ^

	                 
	               4 vs 3
	1. use 2 for loops and iteratue to ditermine the smallest difference
	2.
*/

function findSmallestDifference(arr1, arr2) {
	arr1.sort((x,y) => x - y);
	arr2.sort((x,y) => x - y);
	let point1 = arr1.length - 1;
	let point2 = 0;
	let point3 = arr1.length + arr2.length;
	let min = Math.abs(arr1[point1] - arr2[0]);

	let difference1 = Math.NEGATIVE_INFINITY;
	let difference2 = Math.NEGATIVE_INFINITY;
	while(point3 > 0) {
		difference1 = Math.abs(arr1[point1] - arr2[point2 + 1]);
		difference2 = Math.abs(arr1[point1 - 1] - arr2[point2]);
		console.log(difference1, difference2)
		if(difference1 < difference2 && min > difference1) {
			min = difference1;
			point2++;
		} else if (difference2 < difference1 && min > difference2) {
			min = difference2;
			point1--;
		} else {
			return[arr1[point1], arr2[point2]]
			break;
		}
		point3--;
	} 
	return min;
}

let arr1 = [1, 3, 15, 11, 2];
let arr2 = [23, 127, 235, 19, 8];
console.log(findSmallestDifference(arr1, arr2))