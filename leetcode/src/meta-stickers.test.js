const { log } = require("console");

function minStickers(sticker, word) {
    function buildFreqMap(s) {
        let m = new Array(26).fill(0);
        for (let i = 0; i < s.length; i++) {
            m[s.charCodeAt(i) % 26]++;
        }
        return m;
    }
    let sMap = buildFreqMap(sticker);
    let wMap = buildFreqMap(word);
    let ans = 0;
    for (let i = 0; i < 26; i++) {
        if (wMap[i] > 0) { // curr letter in word
            if (sMap[i] <= 0) {
                return -1;
            }
            // calc number of stickers required for this letter
            let required = Math.ceil(wMap[i] / sMap[i]);
            ans = Math.max(ans, required);
        }
    }
    return ans;
}

it("passes", () => {
    expect(minStickers("ban", "banana")).toEqual(3);
    expect(minStickers("abc", "dev")).toEqual(-1);
});
