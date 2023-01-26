// https://algo.monster/problems/two_sum_sorted

// Given an array of integers sorted in ascending order, find two numbers that add up to a given target. Return the indices of the two numbers in ascending order. You can assume elements in the array are unique and there is only one solution. Do this in O(n) time and with constant auxiliary space.

// Input: [2 3 4 5 8 11 18], 8

// Output: 1 3


function twoSumSorted(arr, target) {
    // WRITE YOUR BRILLIANT CODE HERE
    let lo = 0;
    let hi = arr.length - 1;
    while (lo <= hi) {
        if (arr[lo] + arr[hi] === target) {
            return [lo, hi];
        }
        if (arr[lo] + arr[hi] < target) {
            lo += 1;
        } else {
            hi -= 1;
        }
    }
    return [lo, hi];
}

console.log(twoSumSorted([2, 3, 4, 5, 8, 11, 18], 8))  // [1, 3]