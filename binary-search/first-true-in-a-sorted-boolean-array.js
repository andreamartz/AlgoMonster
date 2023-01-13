// https://algo.monster/problems/binary_search_boundary

// An array of boolean values is divided into two sections; the left section consists of all false and the right section consists of all true. Find the First True in a Sorted Boolean Array of the right section, i.e. the index of the first true element. If there is no true element, return -1.

// Input: arr = [false, false, true, true, true]

// Output: 2

// Explanation: first true's index is 2.


// MY FIRST PASS:
// function findBoundary1(arr) {
//   let lo = 0;
//   let hi = arr.length - 1;
//   let mid;
  
//   while(lo <= hi) {
//       mid = lo + Math.floor((hi - lo) / 2);
//       // arr[mid] is true
//       if (arr[mid]) {
//           // is arr[mid] the first true? If so, return it
//           if (!arr[mid - 1]) {  // PROBLEM: if mid is 0, then we are trying 
                                     // to access an index that doesn't exist
//               return mid;
//           }
//           hi = mid - 1;
//       // arr[mid] is false
//       } else {
//           lo = mid + 1;
//       }
//   }
//   // haven't found true, so return -1
//   return -1;
// }

// My second pass:
function findBoundary1(arr) {
  let lo = 0;
  let hi = arr.length - 1;
  let mid;
  // boundaryIdx starts as -1, bc that is the value to return if there is no true found in arr
  let boundaryIdx = -1;
  
  while(lo <= hi) {
      mid = lo + Math.floor((hi - lo) / 2);
      // arr[mid] is true, but it may not be the FIRST true; 
        // update hi, but also update boundary index to be mid
      if (arr[mid]) {
        boundaryIdx = mid;
        hi = mid - 1;
      // arr[mid] is false
      } else {
        lo = mid + 1;
      }
  }
  // at this point, boundaryIdx will be -1 if true was never found
  return boundaryIdx;
}

function splitWords(s) {
  return s == "" ? [] : s.split(' ');
}

function* main() {
  const arr = splitWords(yield).map((v) => v === 'true');
  const res = findBoundary(arr);
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
