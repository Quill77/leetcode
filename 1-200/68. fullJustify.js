/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {

    let sentence = {words: [], len: 0};
    let sentences = [sentence];
    for (let word of words) {
        if (sentence.len + word.length > maxWidth) {
            sentence = {words: [], len: 0};
            sentences.push(sentence);
        }

        sentence.words.push(word)
        sentence.len += word.length + 1;
    }
    const ans = [];
    for (let j = 0; j < sentences.length - 1; j++) {
        const sentence = sentences[j];
        let breakNum = sentence.words.length - 1;
        let breakTotalLen = maxWidth - (sentence.len - sentence.words.length);
        let breakI = breakTotalLen % breakNum, breakLen = Math.floor(breakTotalLen / breakNum);
        let str = '';
        for (let i = 0; i < sentence.words.length - 1; i++) {
            str += sentence.words[i] + ' '.repeat(i < breakI ? breakLen + 1 : breakLen);
        }
        str += sentence.words.at(-1);
        ans.push(str.padEnd(maxWidth, ' '));
    }
    ans.push(sentences.at(-1).words.join(' ').padEnd(maxWidth, ' '));
    return ans;
};

fullJustify(["What", "must", "be", "acknowledgment", "shall", "be"], 16);
// console.log(Math.floor(Infinity));