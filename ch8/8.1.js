//can hop either 1, 2 or 3 steps at a time. how many possible ways the child can run up the stair
var steps = [1, 2, 3]
function tripleSteps(n, steps) {
	if(n < 0) {
		return 0;
	}

	if(n === 0) {
		return 1
	}
	let stepsPerm = 0;
	for(let i = 0; i < steps.length; i++) {
		let currStep = tripleSteps(n - steps[i], steps)
		if(currStep) {
			stepsPerm += currStep;
		}
	}
	return stepsPerm;
}
//take 10.4 seconds
// let output = tripleSteps(30, steps);
// console.log(output)


/*

	ex. 5 steps
  	     5
 	    /  |  \
  	 4   3   2
  	/|\
   3 2 1
  /|\
 2 1 0
*/
//OPTIMIZED SOLUTION
var steps = [1, 2, 3]
function tripleStepsMemo(n, steps, memo) {
	if(memo[n]) {
		return memo[n]
	}
	if(n < 0) {
		return 0;
	}

	if(n === 0) {
		return 1
	}
	let stepsPerm = 0;
	for(let i = 0; i < steps.length; i++) {
		let currStep = tripleStepsMemo(n - steps[i], steps, memo)
		if(currStep) {
			stepsPerm += currStep;
		}
	}
	memo[n] = stepsPerm;
	return memo[n]
}
//takes .1 second
let output2 = tripleStepsMemo(30, steps, {});
console.log(output2)
