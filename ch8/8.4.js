//return all subset of a set
function subset(arr){
	let resArr = [];
	for(let i = 0; i < arr.length; i++) {
		subsetHelper(arr, i+1, arr[i], resArr)
	}
	console.log(resArr)
}

function subsetHelper(arr, index, str, resArr) {
	if(index > arr.length) {
		return;
	}
	if(index === arr.length) {
		resArr.push(str)
	}

	subsetHelper(arr, index + 1, str + arr[index], resArr)
	subsetHelper(arr, index + 1, str, resArr)

}

subset(['a', 'b', 'c'])

/*
	abc

	a, b, c, ab, ac, bc, abc
			 ''
			/      \     \
     a        b     c
		/ \      / \
	 ab	 a    bc  b
  /  \  \
 abc  ab a


*/