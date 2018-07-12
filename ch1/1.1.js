/*
Implement an algorithm to determine if a string has all unique characters. 
What if you cannot use additional data sctrucutres

*/

function hasAllUniqueCharacters(str) {
	str.sort((a,b) => a - b);
	return str;
}

console.log(hasAllUniqueCharacters('hello'));

/*
 1. use hash object and count the characters - but still uses space
 2. use two for loops and do iteration (n^2)
 3. sort the array and check to see if the character previous is same (still requires additional space)
*/