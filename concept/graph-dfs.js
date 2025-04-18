function dfs(graph, start, visited = new Set()) {
  console.log(start);
  visited.add(start);

  for (let neighbor of graph[start]) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited);
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
const visited = new Set();
const bfs = dfs(graph,start);