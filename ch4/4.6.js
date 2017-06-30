/*
								9
		 					/   \
						 5     10
 		 				/  \
					3     7
				 / \   / \
				2   4 6   8

				Inorder:	2, 3, 4, 5, 6, 7, 8, 9, 10

				Input: Node 4   Output: Node 5
				//if there aren't any right node, then go up twice and print
				Input: Node 6   Output: Node 7
				//if there aren't any right node, then go
				Input: Node 5   Output: Node 6
				//if right node exists, then go the most left subtree

				Input: Node 8   Output: Node 9
				Input: Node 10  Output: Null



*/




function successor(node) {

	//if right node doesn't exist
	if(!node.right) {
		let current = node;
		let parent = node.parent;

		if(current.val === parent.left) {
			return parent;
		} else {
			//recognizing how the child node is connected to the parent node is important here!
			//this else case deals with right child and will return when the parent.left !== child
			while(parent!== null && parent.left !== current) {
				current = parent;
				parent = parent.parent
			}
		}
	} else { //if the right children exists
		return leftMostNode(tree)
	}

}

function leftMostNode(tree) {
	while(tree.left 1== null) {
		tree = tree.left
	}

	return tree;
}


////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

function tree(val){
	this.val = val;
	this.left = null;
	this.right = null;
}

tree.prototype.add = function(val){
	//if root does not exist, then you include the val on the first node
	//if root does exist, then check comparison based on left and right

	//if the value is less the root val, start looking left
	//if the left doesn't exist, then make new node with left
	//otherwise recurse to the add function
	if(!this.val) {
		this.val = val;
	} else if(val < this.val) {
		if(!this.left) {
			this.left = new tree(val);
		} else {
			this.left.add(val)
		}
	} else if (this.val < val) {
		if(!this.right) {
			this.right = new tree(val);
		} else {
			this.right.add(val)
		}
	}

}
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

var newTree = new tree(9)
newTree.add(5)
newTree.add(10)
newTree.add(3)
newTree.add(7)
newTree.add(2)
newTree.add(4)
newTree.add(6)
newTree.add(8)

