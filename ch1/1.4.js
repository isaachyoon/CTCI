//CTCI 1.4
function isAnagram(str1, str2) {
	let hash = {};
	if(str1.length !== str2.length) {
		return false;
	}
	for(let i = 0; i < str1.length; i++) {
		if(!hash[str[i]]) {
			hash[str[i]] = 0;
		}
		hash[str[i]]++;
	}

	for(let i = 0; i < str2.length; i++) {
		if(!hash[str2[i]]) {
			return false;
		} else {
			hash[str2[i]]--;
		}
	}

	for(let key in hash) {
		if(hash[key] !== 0) {
			return false;
		}
	}
	return true;
}