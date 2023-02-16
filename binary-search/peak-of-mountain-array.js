// https://algo.monster/problems/peak_of_mountain_array

function peakOfMountainArray(arr) {
  // WRITE YOUR BRILLIANT CODE HERE
  let lo = 0;
  let hi = arr.length - 1;
  let boundaryIdx = -1;
  const last = arr.length - 1;

  while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    const curr = arr[mid];
    if (mid === last || curr > arr[mid + 1]) {  // what if mid + 1 idx is out of bounds?
      boundaryIdx = mid;
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return boundaryIdx;
}