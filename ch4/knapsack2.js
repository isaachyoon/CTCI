function knapsack(limit, weights, values, ind) {
	// console.log(limit)
	if(ind === weights.length) {
		return 0;
	}
	if(limit - weights[ind] < 0 ) {
		return knapsack(limit, weights, values, ind+1)
	}



	//either we want to take the item
	//we don't want to take the item
	return Math.max(
		knapsack(limit - weights[ind], weights, values, ind + 1) + values[ind],
		knapsack(limit, weights, values, ind+1))

}

var weights = [1, 2, 3];
var values = [6, 10, 12];
var limit = 5;

console.log(knapsack(limit, weights, values, 0))

//we look at the value of the item and determine if we want to take it or not

function transposeTwoStrings(array) {
  var results = [];
  var rows = 0;
  if (array[0].length >= array[1].length) {
     rows = array[0].length;
  }  else {
     rows = array[1].length;
  }

  for (var i = 0; i < rows; i++) {
    results.push((array[0][i] || ' ') + ' ' + (array[1][i] || ' '))
  }
  return results.join("\n");
}

console.log(transposeTwoStrings(['Hello','World']));

function computeSquareRoot(num) {
  var guess = 3;
  var attempt = 0;
  for (var i=0; i<=2; i++){
    attempt = (num / guess);
    guess = ((attempt + guess) /2);
  }
  return Math.floor(guess);
}

console.log(computeSquareRoot(7))
