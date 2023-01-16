// https://algo.monster/problems/min_in_rotated_sorted_array

// A sorted array of unique integers was rotated at an unknown pivot. For example, [10, 20, 30, 40, 50] becomes [30, 40, 50, 10, 20]. Find the index of the minimum element in this array.

// Input: [30, 40, 50, 10, 20]

// Output: 3

// Explanation: the smallest element is 10 and its index is 3.

// Input: [3, 5, 7, 11, 13, 17, 19, 2]

// Output: 7

// Explanation: the smallest element is 2 and its index is 7.

// Edge cases:
  // the array may not be rotated at all, so index 0 contains the minimum value

// Facts:
  // the feasible fcn is: arr[i] < the last value in the array
  // there may be multiple elements for which the feasibility function is true; we can use a boundaryIdx to find the FIRST one
  // important to note that the integers in the array are all unique (i.e., no repeats)

// Plan: 
  // Use a binary search to find the FIRST idx for which the feasible fcn evaluates to true.

function findMinRotated(arr) {
  let lo = 0;
  let last = arr.length - 1;
  let hi = last;
  let boundaryIdx = -1;
  
  while (lo <= hi) {
      let mid = Math.floor(lo + (hi - lo) / 2);
      
      if (arr[mid] <= arr[last]) {  // mid idx is to right of min value
          boundaryIdx = mid;
          hi = mid - 1;
      } else {  // mid idx is to left of min value
          lo = mid + 1;
      }    
  }
  return boundaryIdx;
}

function splitWords(s) {
  return s == "" ? [] : s.split(' ');
}

function* main() {
  const arr = splitWords(yield).map((v) => parseInt(v));
  const res = findMinRotated(arr);
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
