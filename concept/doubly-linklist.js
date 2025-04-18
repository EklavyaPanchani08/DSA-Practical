class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
  }
  size() {
    let count = 0;
    let current = this.head;
    while (current.next) {
      count++;
      current = current.next;
    }
    return count;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
  addFirst(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }
  addLast(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    newNode.prev = current;
    current.next = newNode;
  }
  addAt(index, data) {
    if (index < 0 || index > this.size()) {
      console.error("Invalid Index");
      return;
    }
    let newNode = new Node(data);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    newNode.prev = current;
    newNode.next = current.next;
    if (current.next) {
      current.next.prev = newNode;
    }
    current.next = newNode;

  }
  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
    if (this.head) {
      this.head.prev = null;
    } 
  }
  removeLast() {
    if (!this.head) {
      return;
    }
    if (this.head.next == null) {
      this.head = null;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = null;
  }
  removeAt(index) {
    if (index < 0 || index > this.size()) {
      console.error("Invalid Index");
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      }
      return;
    }
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    if (current.next) {
      current.next = current.next.next;
      if (current.next) {
        current.next.prev = current;
      }
    }
  }
}

const dll = new DoublyLinkedList();

dll.addFirst("ABC");
dll.addFirst("XYZ");
dll.addLast("ABC");
dll.addAt(2, "CUSTOM");
dll.removeFirst();
dll.removeLast();
dll.removeAt(1);
dll.print();
console.log("size = " + dll.size());