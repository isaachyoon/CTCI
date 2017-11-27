function parens(n){
	//
	var parenth = ['(', ')']
	var str = ''
	function recurse(str, n) {
		console.log(n)
		if(n === 0) {
			console.log(str)
			return;
		}
		str += '(';
		recurse(str, n-1)
		str += ')';
		recurse(str, n-1)
	}

	recurse('', n)
}




parens(3)

/*
	//have all opening parens and close them -> depth first open and close after
	((()))
	//
	(()())
	(())()

	            (
	           / \
	          (
	         /
	        (

*/