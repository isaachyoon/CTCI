/*
	Implement a method to perform basic string compression using counts of repeated characters. 
	For example, the string aabccccaaa would become a2b1c5a3. 
	If the 'compressed' string would not become smaller than the original string, your method should return the original string.
	You can assume the string has only uppercase and lowercase letters
*/

/*
	aabcccaaa
	      ^
	newStr = a2b1c3
	curr = a
	count = 1
	
*/

function stringCompression(str) {
	let newStr = '';
	let currLetter = '';
	let count = '';
	for (let i = 0; i < str.length; i++) {
		if(str[i] !== currLetter) {
			newStr += currLetter + count.toString();
			count = 1;
			currLetter = str[i];
		} else {
			count +=1
		}
	}
	newStr += currLetter + count;
	return str.length === newStr.length ? str : newStr;
}

console.log(stringCompression('aabcccaaa'))