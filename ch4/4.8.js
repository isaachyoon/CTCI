/*
Analysis for the following Naive solution:

Time complexity: We are calling findPath twice to push the path into the array. And because of that each time take O(n) to search and push in to the array. We also have to iterate through the array after to find the splitting path.

Space complexity: We are also also creating O(R) r: rows space


find the first common ancestor of two nodes in a binary tree.


traverse through the tree, and if it matches either val1 or val2 then we are going to send that value back up. is the val1 === val2
								3
		 					/   \
						 2     5
 		 				/ \	  / \
					1    5 6   8
											\
											 10

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
var node2 = tree1.right = new tree(4);
var node1 = tree1.left.left = new tree(1);
tree1.left.right = new tree(5);
var node3 = tree1.right.left = new tree(6);
tree1.right.right = new tree(8);
var node4 = tree1.right.right.right = new tree(10);

////////////////////////////////////////////////////////////////////////////////

function findCommonAncestor(tree, node1, node2){


	var array1 = findPath(tree, node1)
	var array2 = findPath(tree, node2)

	var index1 = array1.length-1;
	var index2 = array2.length-1;

	//start from the end and see where the deviation take place betwee the two array. return the common ancestor
	while(index1 !== 0 || index2 !==0) {
		if(array1[index1] !== array2[index2]) {
			return array1[index1 + 1]
		}
		index1--;
		index2--;
	}

	return null;



function findPath(tree, node) {
	if(!tree) {
		return null;
	}


	if(node.val === tree.val) {
		//if it gets to the target, then we create the array and return the array
		var newArr = []
		newArr.push(tree.val)
		return newArr;
	}
	var left = findPath(tree.left, node)
	var right = findPath(tree.right, node)
	//at this point, left or right is an array

	//if it is not null, then we use this array and return the val
	if(left !== null) {
		left.push(tree.val)
		return left
	}
	if(right !== null) {
		right.push(tree.val)
		return right
	}
	return null
}

console.log(findCommonAncestor(tree1, node3, node4))



