//node function creates new instance of nodes that could be added to the tree
// function node(val){
// 	this.val = val;
// 	this.left = null;
// 	this.right = null;
// }

//this function creates a new instance of tree
function tree(val){
	this.val = val;
	this.left = null;
	this.right = null;
}

//adds to the tree
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

///////////////////////////////////////////////////////////////////////////////
//given a sorted list, this function creates a tree with minimal level
function minimalTree(arr) {
	let newTree = new tree()
	helperFunction(arr, 0, arr.length - 1, newTree)
	return newTree
}

function helperFunction(arr, beg, end, tree) {

	if(beg > end) {
		return;
	}
	let mid = Math.floor((beg + end) / 2);

	tree.add(arr[mid])
	//left
	helperFunction(arr, beg, mid - 1, tree)
	helperFunction(arr, mid+1, end, tree)
}
////////////////////////////////////////////////////////////////////////////////

//this function converts binary tree to linked list based on their levels
function node(val){
	this.val = val;
	this.next = null;
}

function linkedList(){
	this.head = null;
	this.tail = null;
}

linkedList.prototype.add = function(val) {
	//no input has been received
	if(!this.head) {
		let newNode = new node(val);
		this.head = newNode
		this.tail = newNode;
	} else {
		let temp = this.head;
		this.head = new node(val);
		this.head.next = temp;
	}
}

//[ 3, 7]

function listOfDepthToLL(tree){
	let resArray = [];
	let queue = [];
	//use Breadth first search and push in the nodes to the queue
	queue.push(tree)
	while(queue.length !== 0) {
		var lList = new linkedList()
		for(var i = 0; i < queue.length; i ++) {
			let node = queue[0]
			lList.add(node.val);
			// console.log(lList)
			if(node.left){
				queue.push(node.left);
			}
			if(node.right) {
				queue.push(node.right);
			}
			queue.shift()
		}
		resArray.push(lList)
		// console.log(resArray)
	}
	return resArray
}

//
function checkTreeBalance(tree) {
	console.log('check', checkBalanced(tree))
	if(checkBalanced(tree) > -1) {
		console.log('entered')
		return true
	}
	return false;
}
function checkBalanced(tree){
	if(!tree) {
		return 0;
	}
	console.log(tree.val)
	let left = checkBalanced(tree.left)
	let right = checkBalanced(tree.right)

	if(right === -1 || left === -1) {
		return -1;
	}
	if(Math.abs(right - left) > 1){
		return -1;
	}
	if(right > left) return right+ 1;
	return left + 1


}

// function checkHeight(tree) {

// }
/*
      5
     / \
    2   8
   /   / \
	1		6   10
	         \
	         15
*/
let newtree = minimalTree([1,2,3,4,5,6,7,8,9])
let ll = listOfDepthToLL(newtree)

var tree1 = new tree(3);
tree1.add(2)
tree1.add(5)
tree1.add(1)
tree1.add(4)
tree1.add(6)
tree1.add(8)
tree1.add(10)
tree1.add(12)
// console.log(tree1)

console.log(checkTreeBalance(tree1))
// console.log(ll[0])
