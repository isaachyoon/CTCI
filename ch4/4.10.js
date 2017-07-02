/*
Write an algorithm to find the 'next' node of a given node in a binary search tree. You may assume that each node has a link to its parent

ex. INPUT func(tree, node{val:3, left: {obj}, right: {obj} }) //true

key observation: Must deeply equal and not just the value
								5
		 					 / \
							3   7
 		 				 / \
						1   6

// check whether the values are same
	// recursively call passing left
	// recursively call passing right
*/