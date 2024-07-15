/*
You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

0 <= j <= nums[i] and
i + j < n
Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

 

Example 1:

Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [2,3,0,1,4]
Output: 2

ptr problem worst case all 1s

TC O(N) SC O(1)
*/
const { log } = require("console");

function minJumps(nums) {
    let N = nums.length, min = -1;
    for (let i = N - 2; i >= 0; i--) {
        // nums[i] is jumps can i get there from this jump ?
        // can i get there from 1 + next?
        // not get there at all?
        if (nums[i] === 0) {
            continue;
        } else {
            let dist = (N - 1 - i);
            if (nums[i] >= dist) {
                min = 1;
            } else {
                min = 1 + min;
            }
        }
    }
    return min;
}

it("passes", () => {
    expect(minJumps([2,3,1,1,4])).toEqual(2);
    expect(minJumps([2,3,0,1,4])).toEqual(2);
});
