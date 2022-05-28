/**
 * @param {string} s
 * @return {string}
 */
//要准确判断pop,push和 str+= 的位置
var removeOuterParentheses = function (s) {
    let str = "";
    const stack = [];
    for (let i = 0; i < s.length; ++i) {
        const x = s[i];
        if (x === ')') {
            stack.pop();
        }
        if (stack.length) {
            str += x;
        }
        if (x === '(') {
            stack.push(x);
        }
    }
    return str;
};