class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
    this.frequency = 0;
  }
}
class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  insert(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!current.children[char]) {
        current.children[char] = new TrieNode();
      }
      current = current.children[char];
    }
    current.isEndOfWord = true;
  }
  recordSearch(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) return;
      node = node.children[char];
    }
    if (node?.isEndOfWord) {
      node.frequency++;
    }
  }

  findNode(prefix) {
    let current = this.root;
    for (let char of prefix) {
      const currentChar = current.children[char];
      if (!currentChar) return null;
      current = current.children[char];
    }
    return current;
  }
  collectAllWords(node, prefix, suggestions) {
    console.log("👀 ⇒ file: auto-suggestions-tree.js:44 ⇒ Trie ⇒ collectAllWords ⇒ node:", node)
    if (node.isEndOfWord) {
      suggestions.push({ word: prefix, frequency: node.frequency });
    }
    for (let char in node.children) {
      this.collectAllWords(node.children[char], prefix + char, suggestions);
    }
  }
  autoSuggest(prefix) {
    const node = this.findNode(prefix);
    if (!node) return [];

    let suggestions = [];
    this.collectAllWords(node, prefix, suggestions);

    suggestions.sort((a, b) => b.frequency - a.frequency);
    
    return suggestions.map(s => s.word);
  }
}
const trie = new Trie();
trie.insert("cat");
trie.insert("car");
trie.insert("cart");
trie.insert("dog");
trie.insert("door");

// trie.recordSearch("cart");
console.log(JSON.stringify(trie.root, null, 2));

console.log(trie.autoSuggest("cd"));