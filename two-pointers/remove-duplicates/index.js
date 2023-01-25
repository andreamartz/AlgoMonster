// https://algo.monster/problems/remove_duplicates

// Given a sorted list of numbers, remove duplicates and return the new length. You must do this in-place and without using extra memory.

// Input: [0, 0, 1, 1, 1, 2, 2].

// Output: 3.

// Your function should modify the list in place so the first 3 elements becomes 0, 1, 2. Return 3 because the new length is 3.


function removeDuplicates(arr) {
  // WRITE YOUR BRILLIANT CODE HERE
  if (!arr.length) return 0;
  let slow = 0;
  let fast = 0;
  while(fast < arr.length) {
      if (arr[fast] !== arr[slow]) {
          slow += 1
          arr[slow] = arr[fast]
      }
      fast += 1;
  }
  return slow + 1;
}

function splitWords(s) {
    return s == "" ? [] : s.split(' ');
}

function* main() {
    const arr = splitWords(yield).map((v) => parseInt(v));
    const res = removeDuplicates(arr);
    console.log(arr.slice(0, res).join(' '));
}

class EOFError extends Error {}
{
    const gen = main();
    const next = (line) => gen.next(line).done && process.exit();
    let buf = '';
    next();
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', (data) => {
        const lines = (buf + data).split('\n');
        buf = lines.pop();
        lines.forEach(next);
    });
    process.stdin.on('end', () => {
        buf && next(buf);
        gen.throw(new EOFError());
    });
}