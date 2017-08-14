//create an hash map to count all the words in the book

function wordFrequencies(bookArr, word) {
	let wordBank = {};
		for(let i = 0; i < bookArr.length; i++) {
			let word = bookArr[i].toLowerCase();
			if(!wordBank[word]) {
				wordBank[word] = 0;
			}
			wordBank[word]++;
		}
	}
	return wordBank[word];
}

//what if we were running this algorithm multiple times?
//memoize