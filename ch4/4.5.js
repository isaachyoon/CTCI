function validateBST(node, min, max) {
	min = min || Number.NEGATIVE_INFINITY;
	max = max || Number.POSITIVE_INFINITY;
	//if node doesn't exist, true;
	if(!node) {
		return true
	}

	//if min < node.val < max then return false;

	//call validateBST with min, max
	let left = validateBST(node.left, min, node.val);
	let right = validateBST(node.right, node.val, max);
	if(!left || !right) {
		return false;
	} else if (min < node.val && node.val < max) {
		return true;
	} else {
		return false;
	}
}

function tree(val){
	this.val = val;
	this.left = null;
	this.right = null;
}

let newTree = new tree(5)
newTree.left = new tree(3)
newTree.left.left = new tree(1)
newTree.left.right = new tree(4)
newTree.right = new tree(7)
newTree.right.left = new tree(6)
newTree.right.right = new tree(8)

console.log(validateBST(newTree))
/*
the following is not BST because '6' should have gone right, not left.
		5
	 / \
	3   7
 / \
1   6

send in minimum and maximum to the left and right that will determine the range.

*/