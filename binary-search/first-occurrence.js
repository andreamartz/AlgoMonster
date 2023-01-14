// https://algo.monster/problems/binary_search_duplicates

// Given a sorted array of integers and a target integer, find the first occurrence of the target and return its index. Return -1 if the target is not in the array.

// Input:

// arr = [1, 3, 3, 3, 3, 6, 10, 10, 10, 100]
// target = 3
// Output: 1

// Explanation: The first occurrence of 3 is at index 1.

// Input:

// arr = [2, 3, 5, 7, 11, 13, 17, 19]
// target = 6
// Output: -1

// Explanation: 6 does not exist in the array.

function findFirstOccurrence(arr, target) {
  if (arr.length === 0) return -1;
  
  let lo = 0;
  let hi = arr.length - 1;
  let boundaryIdx = -1;

  while(lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    if (arr[mid] === target) {
      boundaryIdx = mid;
      hi = mid - 1;
    } else if (arr[mid] < target) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return boundaryIdx;
}

function splitWords(s) {
  return s == "" ? [] : s.split(' ');
}

function* main() {
  const arr = splitWords(yield).map((v) => parseInt(v));
  const target = parseInt(yield);
  const res = findFirstOccurrence(arr, target);
  console.log(res);
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
