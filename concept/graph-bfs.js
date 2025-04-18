function bfs(graph, start) {
  let queue = [start];
  let visited = new Set();
  visited.add(start);

  while (queue.length) {
    let node = queue.shift();
    console.log(node);

    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}
const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: ["F"],
  F: []
};
const start = "A";
bfs(graph, start); 