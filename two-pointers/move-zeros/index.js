// https://algo.monster/problems/move_zeros

// Move Zeros
// Given an array of integers, move all the 0s to the back of the array while maintaining the relative order of the non-zero elements. Do this in-place using constant auxiliary space.

// Input:

// [1, 0, 2, 0, 0, 7]
// Output:

// [1, 2, 7, 0, 0, 0]


// Plan:
   // keep the slow pointer on the first zero in the array
   // when the fast pointer hits a non-zero number, swap the two values and update slow to be slow + 1

// [1, 0, 2, 0, 0, 7] --> [1, 2, 7, 0, 0, 0]
// [0, 0, 3, 4, 0] --> [3, 4, 0, 0, 0]

function moveZeros(nums) {
  // WRITE YOUR BRILLIANT CODE HERE
  const isZero = (element) => element === 0;
  let slow = nums.findIndex(isZero);
  if (slow === -1) return nums;
  let start = slow;

  for (let fast = start; fast < nums.length; fast += 1) {
      if (nums[fast] !== 0) {
        [nums[slow], nums[fast]] = [nums[fast], nums[slow]]; 
        slow += 1;
      }
  }
  return nums;
}

// function splitWords(s) {
//   return s == "" ? [] : s.split(' ');
// }

// function* main() {
//   const nums = splitWords(yield).map((v) => parseInt(v));
//   moveZeros(nums);
//   console.log(nums.join(' '));
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

console.log(moveZeros([1, 0, 2, 0, 0, 7]));
console.log(moveZeros([0, 0, 3, 4, 0]));