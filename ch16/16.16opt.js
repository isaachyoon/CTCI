function subsort(arr) {

	let leftInd = null;
	let rightInd = null;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > arr[i+1]) {
			leftInd = i;
		}
	}
	for (let i = arr.length - 1; i >= 0; i--) {
		if (arr[i] < arr[i+1]) {
			rightInd = i;
		}
	}
	let max = Math.max(...arr[3]);		
	console.log(max);


}

let arr = [1, 2, 4, 7, 11, 7, 12, 6, 7, 16, 18, 19];
console.log(subsort(arr))