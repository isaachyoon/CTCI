
/*
Check if the following tree is a valid Binary Search Tree

the following is not BST because '6' should have gone right, not left.
send in minimum and maximum to the left and right that will determine the range.

								5
		 					 / \
(-inf, 5)			3   7  (5, +inf)
 		 				 / \
(-inf, 3)		1   6 (3, 5) 6 doesn't fit in to this range so we return false;


*/

function validateBST(node, min, max) {
	min = min || Number.NEGATIVE_INFINITY;
	max = max || Number.POSITIVE_INFINITY;
	//if node doesn't exist, return true because nothing wrong here;
	if(!node) {
		return true
	}

	//if min < node.val < max then return false;

	//call validateBST with min, max
	let left = validateBST(node.left, min, node.val);
	let right = validateBST(node.right, node.val, max);

	//declaring variable here uses postOrder traversal.
	//if either left or right returned false, we are just going to return false;
	//if the number doesn't fit between nodes, we are going to return false;
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
