// https://algo.monster/problems/binary_search_first_element_not_smaller_than_target

// Given an array of integers sorted in increasing order and a target, find the index of the first element in the array that is larger than or equal to the target. Assume that it is guaranteed to find a satisfying number.

// Input:

// arr = [1, 3, 3, 5, 8, 8, 10]
// target = 2
// Output: 1

// Explanation: the first element larger than 2 is 3 which has index 1.

// Input:

// arr = [2, 3, 5, 7, 11, 13, 17, 19]
// target = 6
// Output: 3

// Explanation: the first element larger than 6 is 7 which has index 3.

function firstNotSmaller(arr, target) {
  let lo = 0;
  let hi = arr.length - 1;
  let boundaryIdx = -1;

  while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    if (arr[mid] >= target) {
      boundaryIdx = mid;
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return boundaryIdx;
  return 0;
}

function splitWords(s) {
  return s == "" ? [] : s.split(' ');
}

function* main() {
  const arr = splitWords(yield).map((v) => parseInt(v));
  const target = parseInt(yield);
  const res = firstNotSmaller(arr, target);
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
