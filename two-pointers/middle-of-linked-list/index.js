// https://algo.monster/problems/middle_of_linked_list

// Middle of a Linked List
// Find the middle node of a linked list.

// Input: 0 1 2 3 4

// Output: 2

// If the number of nodes is even, then return the second middle node.

// Input: 0 1 2 3 4 5

// Output: 3

class Node {
  constructor(val, next = null) {
      this.val = val;
      this.next = next;
  }
}

function middleOfLinkedList(head) {
    // WRITE YOUR BRILLIANT CODE HERE
    let fastNode = head;
    let slowNode = head;
  
    if (!head.next) return head.val;
    let fast = 0;
  
    while (fastNode.next) {
      if (fast % 2 === 0) {
        // slow += 1;
        slowNode = slowNode.next;
      }
      fast += 1;
      fastNode = fastNode.next;
    }
    return slowNode.val;
}

// function buildList(nodes, f) {
//   const { value, done } = nodes.next();
//   if (done) return null;
//   const next = buildList(nodes, f);
//   return new Node(f(value), next);
// }

// function splitWords(s) {
//   return s == "" ? [] : s.split(' ');
// }

// function* main() {
//   const head = buildList(splitWords(yield)[Symbol.iterator](), parseInt);
//   const res = middleOfLinkedList(head);
//   console.log(res);
// }

// class EOFError extends Error {}
// {
//   const gen = main();
//   const next = (line) => gen.next(line).done && process.exit();
//   let buf = '';
//   next();
//   process.stdin.setEncoding('utf8');
//   process.stdin.on('data', (data) => {
//       const lines = (buf + data).split('\n');
//       buf = lines.pop();
//       lines.forEach(next);
//   });
//   process.stdin.on('end', () => {
//       buf && next(buf);
//       gen.throw(new EOFError());
//   });
// }
