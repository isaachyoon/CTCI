function addLinkedList(list1, list2) {
	let head = list1;
	let carryOver = 0;
	while(list1 && list2) {
		if(carryOver !== 0) {
			var temp = carryOver;
			carryOver = 0;
		}
		if(!list1) {
			list1.val = 0;
		}
		if(!list2) {
			list2.val = 0;
		}
		let add = list1.val + list2.val;
		if(add >= 10) {
			carryOver = 1;
			add -= 10;
		}
		if(!temp) {
			temp = 0;
		}

		list1.val = add + temp;
		list1 = list1.next;
		list2 = list2.next;
	}
	return head;
}

function LL(val){
	this.val = val;
	this.next = null;
}

let L1 = new LL(3);
L1.next = new LL(1);
L1.next.next = new LL(5);
// L1.next.next.next = new LL(2);

let L2 = new LL(5);
L2.next = new LL(9);
L2.next.next = new LL(4);

let output = addLinkedList(L1, L2)
console.log(JSON.stringify(output));