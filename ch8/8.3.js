function magicIndex(arr){
	let min = 0;
	let max = arr.length - 1;

	while(min <= max){
		let mid = Math.floor((min + max) / 2);
		if(arr[mid] === mid) {
			return mid;
		} else if (mid > arr[mid]) {
			min = mid + 1;
		} else {
			max = mid - 1;
		}
	}
	return - 1;
}

let output = magicIndex([1, 3, 4, 5]);
console.log(output)
/*
[-1, 0, 2, 5]
     ^
  0  1  2  3

  if the index > val, go right
*/