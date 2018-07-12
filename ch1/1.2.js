/*
Given two strings, write a method to decide if one is a permutation of the other
*/

/*
	1. sort both strings and iterate through. Time complexity O(nlogn);
	2. Use hash table. the moment it dips to -number, then return false;
*/

function strPermutation(str1, str2) {
	let hashObj = {};
	if(str1.length !== str2.length) return false;
	for (let i = 0; i < str1.length; i++) {
		let letter = str1[i]
		if (!hashObj[letter]) {
			hashObj[letter] = 0;
		}
		hashObj[letter]++;
	}
	for (let i = 0; i < str1.length; i++) {
		let letter = str2[i];
		console.log(letter)
		if(hashObj[letter] > 0) {
			hashObj[letter]--;
		} else if(!hashObj[letter] || hashObj[letter] < 0) {
			return false;
		}
	}
	return true;
}

console.log(strPermutation('hellot', 'olleh'));