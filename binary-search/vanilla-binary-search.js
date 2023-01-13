// https://algo.monster/problems/binary_search_intro

// Given a sorted array of integers and an integer called target, find the element that equals the target and return its index. If the element is not found, return -1.

function binarySearch(arr, target) {
    // WRITE YOUR BRILLIANT CODE HERE
    let lo = 0;
    let hi = arr.length - 1;
    let mid;

   
    while (lo <= hi) {
        mid = Math.floor((lo + hi) /2);
        if (arr[mid] === target) {
            return mid;       
        }
        if (arr[mid] < target) {
            lo = mid + 1;
            continue;
        }
        hi = mid - 1;        
    }       
    return -1;
}

function splitWords(s) {
    return s == "" ? [] : s.split(' ');
}

function* main() {
    const arr = splitWords(yield).map((v) => parseInt(v));
    const target = parseInt(yield);
    const res = binarySearch(arr, target);
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