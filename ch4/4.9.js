/*
a binary search tree was created by traversing through an array from left to right inserting each element. Given a binary search tree with distinct element, print all possible array

		2
	 / \
	1   3

output [2, 1, 3] //node, left, right
	     [2, 3, 1] //node, right, left

	   5
	 /   \
	3     7
 / \   /  \
1   4 6    8

[5 3 7 1 4 6 8]

5314768
5341768

[5,3,7] + [6, 8]
          [8, 6]
[5,7,3]

5 -> 3 -> 1 -> 4 -> 7 -> 6 -> 8
     left
5 -> 7 -> 8 ->

push 5

1) push 3 2) push 7

*/

function tree(val){
	this.val = val;
	this.left = null;
	this.right = null;
}

var tree1 = new tree(5);
tree1.left = new tree(3);
var node2 = tree1.right = new tree(7);
var node1 = tree1.left.left = new tree(1);
tree1.left.right = new tree(4);
var node3 = tree1.right.left = new tree(6);
tree1.right.right = new tree(8);
// var node4 = tree1.right.right.right = new tree(10);


/*
	   5
	 /   \
	3     7
 / \   /  \
1   4 6    8
*/
function BSTseqence(tree) {
	var collect1 = []
	var collect2 = []
	BSTleftHelper(tree)
	// BSTrightHelper(tree)

	function BSTleftHelper(node){
		console.log(collect1)
		if(!node) {
			return;
		}
		collect1.push(node.val)
		BSTleftHelper(node.left, Array.from(collect1))
		BSTleftHelper(node.right, Array.from(collect1))
	}


	function BSTrightHelper(node, collect){
		// console.log(collect2)
		if(!node) {
			return;
		}
		collect2.push(node.val)
		BSTleftHelper(node.right, Array.from(collect))
		BSTleftHelper(node.left, Array.from(collect))
	}

}




BSTseqence(tree1)