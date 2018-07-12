/*
Write a method to replace all spaces in a string with '%20'. 
You may assume that the string has sufficient space at the end to hold the additional characters, 
and that you are given the 'true' length of the string.

input: "Mr John Smith"
output: "Mr%20John%20Smith"
*/

function replaceSpaceRegex(str, replace) {
	return str.replace(/\s/ig, replace);
}

/*
	create extra space accordingly
*/
function replaceSpace(str, replace) {
	let newStr = ''
	for (let i = 0; i < str.length; i++) {
		if (str[i] !== ' ') {
			newStr += str[i];
		} else {
			newStr += replace;
		}
	}
	return newStr;
}

console.log(replaceSpace("Mr John Smith", '%20'))