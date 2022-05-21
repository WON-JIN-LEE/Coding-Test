class Node{
    constructor(content, children=[]) {
        this.content = content;
        this.children = children;
        
    }
}

const tree = new Node("hello", [
  new Node("world"),
  new Node("and"),
  new Node("fun", [new Node("JavaScript")]),
]);

function traverse(depth,node) {
  console.log(depth, node.content);
  for (let child of node.children) {
    traverse(depth+1, child);
  }
}

traverse(0,tree);
// hello world and fun javascript!