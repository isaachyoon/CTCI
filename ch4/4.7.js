//second project is dependent on first
//input projects , dependencies
//var dependencies: [[a, d], [f, b], [b, d], [f, a], [d, c]]

/*

		project = a, b, c, d, e, f

		a -> d -> c
		^    ^
		|    |
		f -> b

		f, a, b, d, c, e

	//do I have direct access to these objects. if I use hash than I would have direct acess.
		ex. {a: [Object object] , b: [Object object], c: [Object object],d: [Object object], e: ,f}
		//Otherwise, you would have to search for the object and keep track of visited node
	}

	//if 'from' is missing, then add to the queue
		[e, f, a, b, d, c]
*/

function graph(val) {
	this.val = val;
	this.from = []
	this.to = [];
}


function buildOrder(project, dependencies){
	//build graph
	var graph = buildGraph(dependencies)
	// console.log(graph)
	//check build order
	var build = [];
	var workLoad = [];
	for(var key in graph) {
		if(graph[key].from.length === 0) {
			build.push(graph[key])
		}
	}
	var visited = {};

	while(build.length !== 0) {
		var node = build.shift();
		visited[node.val] = true;
		for(var i = 0; i < node.to.length; i++) {
			if(!visited[node.to[i]]) {
				build.push(graph[node.to[i]])
			}
		}
	}
	for(var i = 0; i <project.length; i++) {
		if(!visited[project[i]]) {
			visited[project[i]] = true;
		}
	}
	var resArr = []
	for (var key in visited) {
		resArr.push(key)
	}
	return resArr
}

function buildGraph(depend){
	//[[a, d], [f, b], [b, d], [f, a], [d, c]]
	var hashGraph = {}

	function addNode(from, to) {
		if(!hashGraph[from]) {
			hashGraph[from] = new graph(from);

		}
		hashGraph[from].to.push(to)
		if(!hashGraph[to]) {
			hashGraph[to] = new graph(to);
		}
		hashGraph[to].from.push(from)
	}

	for(var i = 0; i < depend.length; i++) {
		addNode(depend[i][0], depend[i][1])
	}


	return hashGraph;
}

var projects = ['a', 'b', 'c', 'd', 'e', 'f'];
var dependencies = [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c']]

var output = buildOrder(projects, dependencies)
console.log(output)
//