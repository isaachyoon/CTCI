/*

ANALYSIS:

time complexity: O(n) we only visit each node once
Space complexity: O(1) we are not creating any additional storage

traverse through the tree, and if it matches either val1 or val2 then we are going to send that value back up. is the val1 === val2
								3
		 					/   \
						 2     4
 		 				/ \	  / \
					1    5 6   8
											\
											 10

								3
		 					/   \
						 2     6
 		 				/ \	  / \
					1    5 6   8
											\
											 10
	Let's assume that we want to find the common ancestor of 6,10
	Se use the idea of post order traversal where the left subtree and right subtree will converge.
	If we find either node1 or node2, we push that node up to the center
*/

////////////////////////////////////////////////////////////////////////////////
//															//HELPER FUNCTIONS//
////////////////////////////////////////////////////////////////////////////////

function tree(val){
	this.val = val;
	this.left = null;
	this.right = null;
}

var tree1 = new tree(3);
tree1.left = new tree(2);
var node4 = tree1.right = new tree(4);
var node1 = tree1.left.left = new tree(1);
var node5 = tree1.left.right = new tree(5);
var node3 = tree1.right.left = new tree(6);
var node8 = tree1.right.right = new tree(8);
var node10 = tree1.right.right.right = new tree(10);

////////////////////////////////////////////////////////////////////////////////
function findCommonAncestor(tree, node1, node2){
	if(!tree) {
		return null;
	}

	//if the values of the two nodes are same, then pass up the object
	if(tree.val === node1.val || tree.val === node2.val) {
		return tree;
	}

	var left = findCommonAncestor(tree.left, node1, node2)
	var right = findCommonAncestor(tree.right, node1, node2)

	//by the time it gets here, we are looking at bottom left & right subtree.
	//this is the merging part where the left and the right came together and we are sending up the LCA
	if(left!== null && right !== null) {
		return tree;
	}

	//if the left has value return left, otherwise return right
	//because we are looking for node value that was pushed up
	return left !== null ? left : right
}


let output = findCommonAncestor(tree1, node4, node10)
console.log(output)
