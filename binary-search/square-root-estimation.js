// https://algo.monster/problems/sqrt

// Given an integer, find its square root without using the built-in square root function. Only return the integer part (truncate the decimals).

// Input: 16

// Output: 4

// Input: 8

// Output: 2

// Explanation: square root of 8 is 2.83..., return the integer part, 2


// Edge cases: the integer could be 0 or negative

// Facts known:
  // the upper bound on the square root of an integer n is equal to n/2 for integers gt or eq to 4.

// Plan:

  // iterate over the integers from 1 to 

function squareRoot(n) {
  if (n < 0) return null;
  if (n < 2) return n;

  let lo = 1;
  let hi = Math.floor(n / 2);
  let loBoundary = lo;


  while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    if (mid ** 2 === n) {
      return mid;
    }
    if (mid ** 2 < n) {
      loBoundary = mid;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return loBoundary;
}

function* main() {
  const n = parseInt(yield);
  const res = squareRoot(n);
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
