function oneAway(str1, str2) {
	let sameLength = str1.length === str2.length;
	if(Math.abs(str1.length - str2) > 1) {
		return false;
	}
	let longer = null;
	let shorter = null;
	if (str1.length > str2.length) {
		longer = str1;
		shorter = str2;
	}
	let difference = 0;
	let point1 = 0;
	let point2 = 0;

	while (point1 < str1.length) {
		if (difference > 1) return false;
		if (sameLength && str1[point1] !== str2[point2]) {
			difference++;
			point1++;
			point2++;
		} else if (str1[point1] !== str2[point2]) {
			point1++;
			difference++;
		} else {
			point1++;
			point2++;
		}
	}
	return difference <= 1 ? true : false;
}

console.log(oneAway('pale', 'bake'))
/*
bird    brd
 ^       ^
pale   ple
   ^     ^
pales  pale
   ^      ^
pale   bale
pale   bake
*/