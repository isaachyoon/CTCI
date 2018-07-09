function subsort(arr) {
	let orderOff = false;
	let min = Number.POSITIVE_INFINITY;
	for (let i = 0; i < arr.length; i++) {
		if (orderOff) {
			min = Math.min(min, arr[i]);
		}
		if (arr[i] > arr[i+1]) {
			orderOff = true;
		}
	}
	orderOff = false;
	let max = Number.NEGATIVE_INFINITY;
	for (let i = arr.length - 1; i >= 0; i--) {
		if (orderOff) {
			max = Math.max(max, arr[i]);
		}
		if (arr[i] < arr[i+1]) {
			orderOff = true;
		}
	}
	let startInd = 0;
	let endInd = arr.length - 1;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min && min < arr[i+1]) {
			startInd = i+1;
		}
	}
	for (let i = arr.length-1; i >= 0; i--) {
		if (arr[i] >= max && max >= arr[i-1]) {
			endInd = i;
		}
	}
	return [startInd, endInd]
}

let arr = [1, 2, 4, 7, 11, 7, 12, 6, 7, 16, 18, 19];
console.log(subsort(arr))


//[1, 2, 4, 7, 10, 11, 7, 12, 6,7, 16, 18, 19]
//                     ^