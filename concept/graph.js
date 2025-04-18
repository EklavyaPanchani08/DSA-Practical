class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return;
    }
    for (let key in this.adjacencyList) {
      this.disconnectVertex(key, vertex);
    }
    delete this.adjacencyList[vertex];
  }
  connectVertex(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].push(vertex2);
  }
  disconnectVertex(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
      return;
    }
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1]?.filter(ver => vertex2 !== ver);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2]?.filter(ver => vertex1 !== ver);
  }
}
const graph1 = new Graph();
graph1.addVertex("A");
graph1.addVertex("B");
graph1.addVertex("C");
graph1.addVertex("D");
graph1.connectVertex("A", "B");
graph1.connectVertex("A", "C");
graph1.connectVertex("A", "D");
graph1.connectVertex("B", "D");
graph1.connectVertex("B", "C");
graph1.disconnectVertex("A", "B");
graph1.removeVertex("D");
console.log("👀 ⇒ file: graph.js:7 ⇒ graph1:", graph1.adjacencyList)
