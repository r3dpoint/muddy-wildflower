const { log } = require("console");

function findkthlargest(nums, k) {
  let heap = [];
  function heapify(i) {
    let N = heap.length;
    if (i >= N) {
      return;
    }
    let a = 2 * i + 1;
    let b = 2 * i + 2;
    let maxIdx = i;
    if (a < N && heap[a] < heap[maxIdx]) {
      maxIdx = a;
    }
    if (b < N && heap[b] < heap[maxIdx]) {
      maxIdx = b;
    }
    if (maxIdx !== i) {
      [heap[maxIdx], heap[i]] = [heap[i], heap[maxIdx]];
      heapify(maxIdx);
    }
  }
  function push(num) {
    heap.push(num);
    currIdx = heap.length - 1;
    parnIdx = Math.floor(currIdx / 2);
    while (parnIdx >= 0 && heap[parnIdx] < heap[currIdx]) {
      [heap[currIdx], heap[parnIdx]] = [heap[parnIdx], heap[currIdx]];
      currIdx = parnIdx;
      parnIdx = Math.floor(currIdx / 2);
    }
  }
  for (let num of nums) {
    if (heap.length < k) {
      push(num);
    } else if (num > heap[0]) {
      heap[0] = num;
      heapify(0);
    }
  }
  return heap[0];
}

it("passes findkthlargest", () => {
  expect(findkthlargest([3, 2, 1, 5, 6, 4], 2)).toEqual(5);
  expect(findkthlargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toEqual(4);
});

function quick(nums, K) {
  function quickSelect(arr, k) {
    let pivotIdx = Math.floor(Math.random() * arr.length);
    let pivot = arr[pivotIdx];
    let left = [],
      middle = [],
      right = [];
    for (let num of arr) {
      if (num > pivot) {
        left.push(num);
      } else if (num < pivot) {
        right.push(num);
      } else {
        middle.push(num);
      }
    }
    if (k <= left.length) {
      return quickSelect(left, k);
    }
    if (left.length + middle.length < k) {
      return quickSelect(right, k - left.length - middle.length);
    }
    return pivot;
  }
  return quickSelect(nums, K);
}

it("passes quick", () => {
  expect(quick([3, 2, 1, 5, 6, 4], 2)).toEqual(5);
  expect(quick([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toEqual(4);
});
